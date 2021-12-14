import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
  Image,
  Container,
  Center,
} from "@chakra-ui/react";

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
        <Grid minH="100vh" p={3}>
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
            <Container
              p="2"
              maxW="container.xl"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <ReactPlayer
                url="https://downloader.disk.yandex.ru/disk/26fabaa408368b13e96af3b2bc56d0e8768b1e181fcfbc77dcd8f7e2267ec3e6/61b88edd/BHL3x6ocnUGX0NVBbiAm3m-VGGNF7JLjAWsS0TvbvWgU4XQPXLRMqU2HEPzl6q5zmbe7o43MMqvJEj0NeiRVRA%3D%3D?uid=0&filename=20211117_190007.mp4&disposition=attachment&hash=wnrlcLPKfi09LUoSra/wvhP9NE8NWoThHKqP9KaNFPhplRyAn/CfD7STw22kO4Edq/J6bpmRyOJonT3VoXnDag%3D%3D%3A&limit=0&content_type=video%2Fmp4&owner_uid=4526528&fsize=33609439&hid=6b29e5574f68c626d2183cb8ffebf522&media_type=video&tknv=v2"
                className="react-player"
                playing
                width="100%"
                height="100%"
                controls
              />
            </Container>
            <Container
              p="2"
              maxW="container.xl"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <ReactPlayer
                url="https://downloader.disk.yandex.ru/disk/b6a96ef7e8c64fcf6c397939e0b6e0b694fb139708ae85e675f38cc974b61359/61b88e3f/W7XWPN7K8CPOll4n_1TefTlwRn4GsaM-oHZinuDnDo0qIZNpgWbxELqANEmXkGniwkNwLEMcobGLuyImquQClw%3D%3D?uid=0&filename=20200721_152504.mp4&disposition=attachment&hash=FFW74u5AF%2B7DmH58qwhm%2B83IMIaY61Y4N%2BhKVXWT8KRZOoVoqRzoKG7gX%2BYDPOyQq/J6bpmRyOJonT3VoXnDag%3D%3D%3A&limit=0&content_type=video%2Fmp4&owner_uid=4526528&fsize=133765253&hid=e4ee436782bb727311c7e8714515fda5&media_type=video&tknv=v2"
                className="react-player"
                playing
                width="100%"
                height="100%"
                controls
              />
            </Container>
          </VStack>
        </Grid>
      </Center>
    </ChakraProvider>
  );
};
