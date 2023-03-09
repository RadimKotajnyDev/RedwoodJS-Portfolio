import { Button, chakra, Flex, ListItem, Spacer, UnorderedList, Switch, useColorMode } from "@chakra-ui/react";
import {Link, NavLink, routes} from "@redwoodjs/router";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    // @ts-ignore
    <Flex as="motion.nav" align="center">
      <Spacer/>
      <UnorderedList
        bg="black"
        color="white"
        display="flex"
        borderRadius="xl"
        styleType="none"
        mt={10} mr={20}
        p={5} px={10}
        mb={20} gap="35px"
      >
        <ListItem>
          <Switch
            onChange={() => toggleColorMode()}
            colorScheme="teal"
          />
        </ListItem>
        <ListItem className="hover-underline-animation">
          <Link to={routes.home()}>Home</Link>
        </ListItem>
        <ListItem className="hover-underline-animation">
          <Link to={routes.about()}>About</Link>
        </ListItem>
        <ListItem className="hover-underline-animation"
        >
          <Link to={routes.hobby()}>
            Hobby
          </Link>
        </ListItem>
        <ListItem className="hover-underline-animation">
          <Link to={routes.work()}>Work</Link>
        </ListItem>
        <ListItem className="hover-underline-animation">
          <Link to={routes.contact()}>Contact</Link>
        </ListItem>
      </UnorderedList>
    </Flex>
  );
};

export default Navbar;
