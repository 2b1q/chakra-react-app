import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
  Container,
  Center,
} from "@chakra-ui/react";

import { File } from "../File/File";

import ReactPlayer from "react-player";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <Box textAlign="center">
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          Hello World!
        </Text>
      </Box>
      <Center p="15" w="100%">
        {/* <Grid minH="100vh" p={3}>
          <VStack spacing={4} maxW="container.md">
            <Container
              p="2"
              maxW="container.xl"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <ReactPlayer
                url="https://downloader.disk.yandex.ru/disk/3208be7e47623b99788d3acfb8c07d9d22d28dce981aefdd4c3e8ecac79e290b/61b88ecf/BHL3x6ocnUGX0NVBbiAm3pxlRkfN4rkC21R5XiTTa1R_LEiPNxRGt5oxKYaCXSNZahjIfYvzGm_HEbSTMYnRRA%3D%3D?uid=0&filename=%D0%A1%D1%82%D1%80%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F%20%D0%BA%D0%BE%D1%80%D0%BE%D0%B1%D0%BA%D0%B0.mp4&disposition=attachment&hash=68kueBnfx2Xqg8hz5JcZfPlFEL0Yyg/aRvVok8BO9hUGU%2BzyayShQs1DcBBmBwVnq/J6bpmRyOJonT3VoXnDag%3D%3D%3A&limit=0&content_type=video%2F3gpp&owner_uid=4526528&fsize=64915044&hid=c66cddf30d073ad091d9ce82651697b0&media_type=video&tknv=v2"
                className="react-player"
                playing
                width="100%"
                height="100%"
                controls
              />
            </Container>

            </VStack>
          </Grid> */}
        <File />
      </Center>
    </ChakraProvider>
  );
};
