import Navbar from "src/components/Navbar"
import {Box, Image} from "@chakra-ui/react";

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
      boxSize="full"
      pos="absolute"
    >
      <Image src="/waves.svg" alt="waves" w="full" h="full"
             z-index="0" objectFit="cover"
      />
    </Box>
  </Box>
}

export default DefaultLayout
