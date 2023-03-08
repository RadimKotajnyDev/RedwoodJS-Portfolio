import { Link, NavLink, routes } from "@redwoodjs/router";
import { Button, chakra, Flex, ListItem, Spacer, UnorderedList } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex as="nav" align="center">
      <Spacer />
      <UnorderedList
        display="flex"
        styleType="none"
        m={20} gap="35px"
      >
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
