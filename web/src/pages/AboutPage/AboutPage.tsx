import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Text } from "@chakra-ui/react"


const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />
      <Text as="h1" className="h1-text" align="center" fontSize="7xl">About</Text>
    </>
  )
}

export default AboutPage
