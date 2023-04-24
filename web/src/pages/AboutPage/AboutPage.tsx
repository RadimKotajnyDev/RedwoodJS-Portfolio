import { MetaTags } from "@redwoodjs/web";
import { Text, Grid, Heading, Box, Flex, Image, chakra, shouldForwardProp, Center } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop)
});

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />
      {/* @ts-ignore */}
      <Heading as="h1" className="h1-text" align="center" fontSize={{
        base: "4xl",
        md: "7xl"
      }}>About</Heading>
      <Grid>

      </Grid>
      <Center>
        <Flex as="div" direction="column" bg="whiteAlpha.100" p={10} borderRadius={10
        }>
          <Text as="p" fontSize={{
            base: "xl",
            md: "2xl"
          }} fontWeight="light" color="white">I'm using these technologies to bring ideas to life.</Text>
          <Flex justify="center">
            <ChakraBox
              className="absolute"
              animate={{ rotate: [-180, 180] }}
              // @ts-ignore
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            >
              <Image width="200px" height="200px" src="/react.svg" alt="React Logo" p={10} />
            </ChakraBox>
            <ChakraBox>
              <Image width="200px" height="100px" src="/tailwindcss-logotype-white.svg" alt="Tailwindcss logo" />
              <Box p={3} bg="whitesmoke" borderRadius="xl">
                <Image width="200px" height="50px" alt="chakraUI logo" src="https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/media/logo-colored@2x.png?raw=true" />
              </Box>
            </ChakraBox>
          </Flex>
        </Flex>
      </Center>
    </>
  );
};

export default AboutPage;
