import Navbar from "src/components/Navbar"
import {Box, Image, Text} from "@chakra-ui/react";

type DefaultLayoutProps = {
  children?: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return <Box
    pos="relative"
    h="100vh"
    //background="blackAlpha.900" //TODO: fix dark mode
    //color="white"
  >
    <Box
      pos="absolute"
      zIndex="1"
      w="full"
    >
      <Navbar />
      <main>
        {children}
      </main>
    </Box>
    <Box
      zIndex="-1"
      mt={50}
      boxSize="full"
      pos="relative"
    >
      <Image src="/waves2.svg" alt="waves" w="full" h="full"
             z-index="0" objectFit="cover"
      />
    </Box>
    <Text bg="teal.800" color="white"  align="center" p={20} fontSize="5xl" fontWeight="thin">Inspiration and ideas comes in waves.</Text>
    <Box
      zIndex="-1"
      boxSize="full"
      pos="static"
    >
      <Image src="/waves4.svg" alt="waves" w="full" h="full"
             z-index="0" objectFit="cover"
      />
    </Box>
  </Box>
}

export default DefaultLayout
