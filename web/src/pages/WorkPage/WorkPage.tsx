import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Text } from "@chakra-ui/react";

const WorkPage = () => {
  return (
    <>
      <MetaTags title="Work" description="Work page" />
      <Text as="h1" className="h1-text" align="center" fontSize="7xl">Work</Text>

    </>
  )
}

export default WorkPage
