import { Box, Image, Flex, Spacer, chakra, shouldForwardProp, Text } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";

import { MetaTags } from "@redwoodjs/web";
import "src/index.css";

import { motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop)
});


const HomePage = () => {
  // @ts-ignore
  return (
    <>
      <MetaTags
        title="Radim Kotajny"
        description="Radim Kotajny Portfolio Website"
      />
      <Box>
        <ChakraBox>
          <Flex
            //zIndex="1"
            h={{
              base: "fit",
              lg: "20vh"
            }}
            as="div" position="relative" mb={{
            base: "0",
            md: "-300px"
          }}>
            <Flex as="div" direction="column" ml={{
              base: 10,
              md: 100
            }}>
              <Box h={10}>
                <TypeAnimation
                  cursor={false}
                  wrapper="h1"
                  className="h2-text"
                  speed={25}
                  sequence={["Hello, i'm", 1500]}
                />
              </Box>
              <Box h={10} mb={{
                base: "150",
                sm: 10,
                md: 10
              }}>
                <TypeAnimation
                  cursor={false}
                  //omitDeletionAnimation={true}
                  wrapper="h1"
                  className="h1-text"
                  speed={25}
                  sequence={[1000 ,"Radim Kotajny", 1500]}
                />
              </Box>
              <Box h={10} mb={{
                base: 0,
                md: 350,
                lg: 10
              }}>
                <TypeAnimation
                  speed={50}
                  sequence={[1500, "Frontend Developer."]}
                  wrapper="h2"
                  cursor={false}
                  className="h2-text"
                />
              </Box>
            </Flex>
            <Spacer />
          </Flex>
        </ChakraBox>
        <ChakraBox
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            //@ts-ignore
            transition={{ duration: 1, delay: 0 }}
        >
          <Box
            zIndex="-1"
            boxSize="full"
            pos="relative"
          >
            <Image src="/waves2.svg" alt="waves" w="full" h="full"
                   z-index="0" objectFit="cover"
            />
          </Box>
          <Text bg="teal.800" color="white" align="center" p={20} fontSize={{
            base: "3xl",
            md: "5xl"
          }} fontWeight="thin">Inspiration and ideas
            comes in waves.</Text>
          <Box
            zIndex="-1"
            boxSize="full"
            pos="static"
          >
            <Image src="/waves4.svg" alt="waves" w="full" h="full"
                   z-index="0" objectFit="cover"
            />
          </Box>
        </ChakraBox>
      </Box>
    </>
  );
};

export default HomePage;
