import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Text } from "@chakra-ui/react";

const ContactPage = () => {
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />
      <Text as="h1" className="h1-text" align="center" fontSize="7xl">Contact</Text>

    </>
  )
}

export default ContactPage
