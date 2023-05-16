import Navbar from "src/components/Navbar"
import {Box, Image, Text} from "@chakra-ui/react";

type DefaultLayoutProps = {
  children?: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return <Box
    pos="relative"
    h="100vh"
    //background="blackAlpha.900"
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
  </Box>
}

export default DefaultLayout
