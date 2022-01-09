import { ChakraProvider, Box, Text, theme, Center } from "@chakra-ui/react";

import { File } from "../File/File";
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
          ShareLikeIt
        </Text>
      </Box>
      <Center p="15" w="100%">
        <File />
      </Center>
    </ChakraProvider>
  );
};
