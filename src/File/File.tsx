import {
  Container,
  Input,
  Button,
  Grid,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";

import { listFiles } from "../graphql/queries";

import {
  createFile as createFileMutation,
  deleteFile as deleteFileMutation,
} from "../graphql/mutations";

interface IFile {
  id?: string;
  name: string;
  description?: string;
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
  description: "",
};

export const File = () => {
  const [files, setFiles] = useState<IFile[]>([]);
  const [formData, setFormData] = useState<IFile>(initialFormState);

  const toast = useToast();

  useEffect(() => {
    fetchFiles();
  }, []);

  async function fetchFiles() {
    const apiData = await API.graphql({ query: listFiles });
    const files = (apiData as ApiData).data.listFiles.items;

    setFiles(files);
  }

  async function createFile() {
    if (!formData.name) return;

    const duplicate = files.find(({ name }) => name === formData.name);
    if (duplicate) {
      toast({
        title: "Duplicate",
        description: `File name ${formData.name} exists!`,
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

  return (
    <Container p={2}>
      <Input
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="File name"
        value={formData.name}
      ></Input>
      <Input
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
        placeholder="File description"
        value={formData.description}
      ></Input>
      <Container p={1}>
        <Button
          onClick={createFile}
          variant="solid"
          colorScheme="blue"
          size="sm"
        >
          {" "}
          Create File
        </Button>
      </Container>

      <Grid minH="100vh" p={3}>
        <VStack spacing={4} maxW="container.md">
          {files.map((file) => (
            <Container
              p="2"
              maxW="container.xl"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              key={file.id || file.name}
            >
              <h2>{file.name}</h2>
              <p>{file.description}</p>
              <Button
                colorScheme="red"
                size="xs"
                variant="outline"
                onClick={() => deleteFile(file)}
              >
                Delete file
              </Button>
            </Container>
          ))}
        </VStack>
      </Grid>
    </Container>
  );
};
