import Navbar from "src/components/Navbar"
import { Box } from "@chakra-ui/react";

type DefaultLayoutProps = {
  children?: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return <
    //h="100vh"
    //background="blackAlpha.900" //TODO: fix dark mode
    //color="white"
  >
    <Navbar />
    <main>
      {children}
    </main>
  </>
}

export default DefaultLayout
