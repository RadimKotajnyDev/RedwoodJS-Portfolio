import { Link, routes } from "@redwoodjs/router";
import { MetaTags } from "@redwoodjs/web";
import { Text, Box, Flex, Image, chakra, shouldForwardProp, Center } from "@chakra-ui/react";
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
      <Text as="h1" className="h1-text" align="center" fontSize="7xl">About</Text>
      <Center>
        <Flex as="div" direction="column">
          <Text as="p" fontSize="3xl" fontWeight="light">I code in these languages/frameworks</Text>
          <Flex justify="center">
            <ChakraBox
              animate={{ rotate: 360 }}
              transition={{
                //@ts-ignore
                repeat: Infinity,
                repeatType: "loop",
                duration: 2}}
            >
              <Image width="200px" height="200px" src="/react.svg" alt="React Logo" p={10} />
            </ChakraBox>
          </Flex>
        </Flex>
      </Center>
    </>
  );
};

export default AboutPage;
