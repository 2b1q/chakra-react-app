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
                url="https://s257sas.storage.yandex.net/rdisk/58b29ece010afb949ff0a9a2e76e3f0707ba47154eac17a968cee56df46d9c72/61b889b7/BHL3x6ocnUGX0NVBbiAm3m-VGGNF7JLjAWsS0TvbvWgU4XQPXLRMqU2HEPzl6q5zmbe7o43MMqvJEj0NeiRVRA==?uid=0&filename=20211117_190007.mp4&disposition=attachment&hash=wnrlcLPKfi09LUoSra/wvhP9NE8NWoThHKqP9KaNFPhplRyAn/CfD7STw22kO4Edq/J6bpmRyOJonT3VoXnDag%3D%3D&limit=0&content_type=video%2Fmp4&owner_uid=4526528&fsize=33609439&hid=6b29e5574f68c626d2183cb8ffebf522&media_type=video&tknv=v2&rtoken=m0z7JhDt35FZ&force_default=no&ycrid=na-17fcc95fe9e890b971579b47d32d88ce-downloader7h&ts=5d31a135c9bc0&s=cde8fad4e254339e3ded70333382d9250bbf3dc6d566f192bffbe5ee56978e67&pb=U2FsdGVkX1_BqVg72wPGGH2XCa51GpgUhlYAj1R52fxKSz4xv-aq1OW7N1RWx7N8mvGwokUDpMmx0n_7CakUKR-AfqPNnXPGHifvHs_gH04"
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
                url="https://s328vla.storage.yandex.net/rdisk/b0d0b694a936b4a95b21c74fd067dd6bfab48fbac010e7a6735c34873aa3fb38/61b888f2/BHL3x6ocnUGX0NVBbiAm3pxlRkfN4rkC21R5XiTTa1R_LEiPNxRGt5oxKYaCXSNZahjIfYvzGm_HEbSTMYnRRA==?uid=0&filename=%D0%A1%D1%82%D1%80%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F%20%D0%BA%D0%BE%D1%80%D0%BE%D0%B1%D0%BA%D0%B0.mp4&disposition=attachment&hash=68kueBnfx2Xqg8hz5JcZfPlFEL0Yyg/aRvVok8BO9hUGU%2BzyayShQs1DcBBmBwVnq/J6bpmRyOJonT3VoXnDag%3D%3D&limit=0&content_type=video%2F3gpp&owner_uid=4526528&fsize=64915044&hid=c66cddf30d073ad091d9ce82651697b0&media_type=video&tknv=v2&rtoken=TzJb1eGojpmS&force_default=no&ycrid=na-f448828c393384877909ad321ebe8f67-downloader21e&ts=5d31a079ea080&s=6f08eabd5d528fbab00b7a77217b2f173cf68325844f335017348637245d5e22&pb=U2FsdGVkX18CVIpLaXEEa3ZkDOlTLcB55gcTly6fKEvekW3FwWktNyT7prMuOxndtEe5HaqeWMYX9KkR0HTfecw8odUgvHRUKNoRBtOvSxY"
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
                url="https://s362vla.storage.yandex.net/rdisk/175f7f562ca558f1ea013577a200f68ea5e792428bfb1c6c42ff1db27aeecea8/61b88a5f/W7XWPN7K8CPOll4n_1TefTlwRn4GsaM-oHZinuDnDo0qIZNpgWbxELqANEmXkGniwkNwLEMcobGLuyImquQClw==?uid=0&filename=20200721_152504.mp4&disposition=attachment&hash=FFW74u5AF%2B7DmH58qwhm%2B83IMIaY61Y4N%2BhKVXWT8KRZOoVoqRzoKG7gX%2BYDPOyQq/J6bpmRyOJonT3VoXnDag%3D%3D&limit=0&content_type=video%2Fmp4&owner_uid=4526528&fsize=133765253&hid=e4ee436782bb727311c7e8714515fda5&media_type=video&tknv=v2&rtoken=HcQBNAnCSW7e&force_default=no&ycrid=na-74e8624696d4a4000b864b2cf6c9570c-downloader7h&ts=5d31a1d6015c0&s=d5d0344ac9db0f9d4a64ae6b051a7da77817e8ac66173ce8d9468d5853e0ac75&pb=U2FsdGVkX195Cq8L3Mpl9vJQUMBK0hoAlxgAv12uQ4M5Q64WJ0LBb9hYDBlZ1yDnDheHGPhU9w-Ry1ihjEbHngJ9j0o4-w3lUliqN66KbIA"
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
