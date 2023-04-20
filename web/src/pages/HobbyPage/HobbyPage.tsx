import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Text } from "@chakra-ui/react";

const HobbyPage = () => {
  return (
    <>
      <MetaTags title="Hobby" description="Hobby page" />
      <Text as="h1" className="h1-text" align="center" fontSize={{
        base: "4xl",
        md: "7xl"
      }}>Hobby</Text>

    </>
  )
}

export default HobbyPage
