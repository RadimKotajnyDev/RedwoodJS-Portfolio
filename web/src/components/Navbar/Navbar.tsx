import {Button, chakra, Flex, ListItem, Spacer, UnorderedList} from "@chakra-ui/react";

import {Link, NavLink, routes} from "@redwoodjs/router";


const Navbar = () => {
  return (
    <Flex as="nav" align="center">
      <Spacer/>
      <UnorderedList
        bg="rgba(10,10,10,10)"
        display="flex"
        borderRadius="xl"
        styleType="none"
        mt={10} mr={20}
        p={5} px={10}
        mb={20} gap="35px"
      >
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
