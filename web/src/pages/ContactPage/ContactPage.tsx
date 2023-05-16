import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Center, Heading, Text } from "@chakra-ui/react";

const ContactPage = () => {
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />
      <Center>
        <Heading as="h1" className="h1-text" fontSize={{
          base: "4xl",
          md: "7xl"
        }}>Contact</Heading>
      </Center>

    </>
  )
}

export default ContactPage
