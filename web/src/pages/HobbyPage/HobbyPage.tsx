import { Link, routes } from "@redwoodjs/router";
import { MetaTags } from "@redwoodjs/web";
import { Heading, Text, Center } from "@chakra-ui/react";

const HobbyPage = () => {
  return (
    <>
      <MetaTags title="Hobby" description="Hobby page" />
      <Center>
        <Heading as="h1" className="h1-text" fontSize={{
          base: "4xl",
          md: "7xl"
        }}>Hobby</Heading>
      </Center>

    </>
  );
};

export default HobbyPage;
