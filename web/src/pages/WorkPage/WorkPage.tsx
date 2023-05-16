import { Link, routes } from "@redwoodjs/router";
import { MetaTags } from "@redwoodjs/web";
import { Heading, Text, Center } from "@chakra-ui/react";

const WorkPage = () => {
  return (
    <>
      <MetaTags title="Work" description="Work page" />
      <Center>
        <Heading as="h1" className="h1-text" fontSize={{
          base: "4xl",
          md: "7xl"
        }}>Work</Heading>
      </Center>

    </>
  );
};

export default WorkPage;
