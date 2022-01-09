import {
  Container,
  Input,
  Button,
  Grid,
  VStack,
  useToast,
  Box,
  Image,
  Badge,
} from "@chakra-ui/react";

import like from "./like.png";
import thumbup from "./thubmup.png";

import React, { useState, useEffect } from "react";
import { API, Storage } from "aws-amplify";

import { listFiles } from "../graphql/queries";

import {
  createFile as createFileMutation,
  deleteFile as deleteFileMutation,
  updateFile as updateFileMutation,
} from "../graphql/mutations";
import ReactPlayer from "react-player";

interface IFile {
  id?: string;
  name: string;
  likes?: number;
  thumbups?: number;
  video: string;
}

interface ApiData {
  data: {
    listFiles: {
      items: IFile[];
    };
  };
}

const initialFormState: IFile = {
  name: "",
  video: "",
  likes: 0,
  thumbups: 0,
};

export const File = () => {
  const [files, setFiles] = useState<IFile[]>([]);
  const [formData, setFormData] = useState<IFile>(initialFormState);

  const toast = useToast();

  useEffect(() => {
    fetchFiles();
  }, []);

  async function onChange(element: React.ChangeEvent<HTMLInputElement>) {
    // @ts-ignore
    if (!element?.target?.files[0]) return;
    const file = element.target.files[0];

    setFormData({ ...formData, video: file.name });
    await Storage.put(file.name, file);

    fetchFiles();
  }

  async function fetchFiles() {
    const apiData = await API.graphql({ query: listFiles });
    const files = (apiData as ApiData).data.listFiles.items;

    await Promise.all(
      files.map(async (file) => {
        if (file?.video) {
          const video = await Storage.get(file.video);
          file.video = video;
        }
        if (!file?.likes) file.likes = 0;
        if (!file?.thumbups) file.thumbups = 0;
        return file;
      })
    );

    setFiles(files);
  }

  async function createFile() {
    if (!formData.name) return;

    const duplicate = files.find(({ name }) => name === formData.name);
    if (duplicate) {
      toast({
        title: "Duplicate",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    await API.graphql({
      query: createFileMutation,
      variables: { input: formData },
    });

    if (formData?.video) {
      const video = await Storage.get(formData.video);
      formData.video = video;
    }

    toast({
      title: "Created",
      description: `File ${formData.name} created!`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });

    await fetchFiles();

    setFormData(initialFormState);
  }

  async function deleteFile(file: IFile) {
    const { id, name } = file;

    console.log({ id, name, action: "delete" });

    await API.graphql({
      query: deleteFileMutation,
      variables: { input: { id } },
    });

    await fetchFiles();
  }

  async function updateFile(file: IFile) {
    const { id, likes, thumbups } = file;

    console.log("update file", file);
    await API.graphql({
      query: updateFileMutation,
      variables: { input: { id, likes, thumbups } },
    });

    const updatedFiles = files.map((f) => {
      if (f.id === id) {
        if (likes) f.likes = likes;
        if (thumbups) f.thumbups = thumbups;
      }
      return f;
    });

    setFiles(updatedFiles);
  }

  return (
    <Container p={3}>
      <Input
        onChange={(element) =>
          setFormData({ ...formData, name: element.target.value })
        }
        placeholder="Имя файла"
        value={formData.name}
      ></Input>
      <Input
        onChange={onChange}
        type="file"
        variant="filled"
        placeholder="Filled"
      ></Input>
      <Container p={1}>
        <Button
          onClick={createFile}
          variant="solid"
          colorScheme="blue"
          size="sm"
        >
          {" "}
          Добавить файл
        </Button>
      </Container>

      <Grid minH="100vh">
        <VStack spacing={1} maxW="container.md">
          {files.map((file) => (
            <Container
              p="1"
              maxW="container.xl"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              key={file.id || file.name}
            >
              {file.video && (
                <ReactPlayer
                  url={file.video}
                  className="react-player"
                  playing
                  width="100%"
                  height="95%"
                  controls
                />
              )}

              <Box p={1} display="flex" alignContent="flex-end" paddingLeft={3}>
                <Box as="button">
                  <Image
                    src={like}
                    boxSize="50px"
                    onClick={() => {
                      let likes = (file as IFile)?.likes || 0;
                      likes += 1;

                      const updatedFile = {
                        ...file,
                        likes,
                      } as IFile;

                      updateFile(updatedFile);
                    }}
                  ></Image>
                </Box>
                <Badge
                  ml="1"
                  fontSize="0.8em"
                  margin={2}
                  colorScheme="red"
                  height="90%"
                  fontWeight="bold"
                >
                  {file?.likes || 0}
                </Badge>
                <Image
                  src={thumbup}
                  boxSize="42px"
                  onClick={() => {
                    let thumbups = (file as IFile)?.thumbups || 0;
                    thumbups += 1;

                    const updatedFile = {
                      ...file,
                      thumbups,
                    } as IFile;

                    updateFile(updatedFile);
                  }}
                ></Image>
                <Badge
                  ml="1"
                  fontSize="0.8em"
                  margin={2}
                  colorScheme="purple"
                  height="90%"
                  fontWeight="bold"
                >
                  {file?.thumbups || 0}
                </Badge>
                <Button
                  marginLeft={10}
                  colorScheme="red"
                  size="xs"
                  variant="outline"
                  onClick={() => deleteFile(file)}
                >
                  Удалить файл
                </Button>
              </Box>
            </Container>
          ))}
        </VStack>
      </Grid>
    </Container>
  );
};
