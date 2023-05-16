import { MetaTags } from "@redwoodjs/web";
import {
  Text,
  Grid,
  Heading,
  Box,
  Flex,
  Image,
  chakra,
  shouldForwardProp,
  Center,
  SimpleGrid,
  GridItem, Button, Spacer, Divider
} from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { Link, routes } from "@redwoodjs/router";

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
      <Center>
        <Heading as="h1" className="h1-text" fontSize={{
          base: "4xl",
          md: "7xl"
        }}>About</Heading>
      </Center>
      <Center>
        <Grid templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)"
        }} gap={4} mb={10}>
          <GridItem colSpan={1} rowSpan={2}
                    bg="whiteAlpha.100" p={5}
                    borderRadius={10}
          >
            <Text as="h2" fontSize="xl" align="center">I'm Junior developer <br /> from Czechia</Text>
            <Center>
              <Box boxSize="xs">
                <motion.img
                  initial={{ filter: "grayscale(100%)" }}
                  whileHover={{ filter: "grayscale(0%)" }}
                  transition={{ duration: 0.3 }}
                  src="/RadimLogo.png" alt="logo" />
              </Box>
            </Center>
          </GridItem>
          <GridItem colSpan={1} bg="whiteAlpha.100"
                    p={5} borderRadius={10}
          >
            <Flex direction="column" justify="space-between" h="100%">
              <Text fontSize="2xl">
                Programmer 👨🏻‍💻 <br />
                Photographer 📸 <br />
                Student 🤯
              </Text>
              <Divider my={{
                base: 5,
                md: 0
              }} />
              <Flex direction="row" gap={10} align="center">
                <Text>Check out my hobbies 👻</Text>
                <Button colorScheme="teal" size="md">
                  <Link to={routes.hobby()}>Hobby</Link>
                </Button>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem colSpan={1} bg="whiteAlpha.100"
                    p={5} borderRadius={10}>

          </GridItem>
        </Grid>
      </Center>
      <Center>
        <Flex as="div" direction="column" bg="whiteAlpha.100" p={10} borderRadius={10
        }>
          <Text as="p" fontSize={{
            base: "xl",
            md: "2xl"
          }} fontWeight="light" color="white">I'm working with these technologies</Text>
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
              <Box p={3} bg="whitesmoke" borderRadius="xl" w="fit-content">
                <Image alt="chakraUI logo" w="200px" h="50px"
                       src="https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/media/logo-colored@2x.png?raw=true" />
              </Box>
            </ChakraBox>
          </Flex>
        </Flex>
      </Center>
    </>
  );
};

export default AboutPage;
