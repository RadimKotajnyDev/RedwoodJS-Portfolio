import { Button, chakra, Flex, ListItem, Spacer, UnorderedList, useColorMode } from "@chakra-ui/react";
import {Link, NavLink, routes} from "@redwoodjs/router";
import {MdModeNight} from "react-icons/md"
import {motion} from "framer-motion";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const routeNames = [
    {RouteTo: routes.home(), name: "Home"},
    {RouteTo: routes.about(), name: "About"},
    {RouteTo: routes.hobby(), name: "Hobby"},
    {RouteTo: routes.work(), name: "Work"},
    {RouteTo: routes.contact(), name: "Contact"}
  ]

  return (
    // @ts-ignore
    <Flex as="motion.nav" align="center"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 5 }}
    >
      <Spacer/>
      <UnorderedList
        bg="black"
        color="white"
        display="flex"
        borderRadius="xl"
        styleType="none"
        mt={10} mr={10}
        p={5} px={10}
        mb={20} gap="25px"
      >
        <ListItem>
          <Button
            _focus=""
            onClick={() => toggleColorMode()}
            colorScheme="teal" variant="solid" m={-5} mr={.01}
          >
            <MdModeNight />
          </Button>
        </ListItem>
        <ListItem className="border" />
        {routeNames.map( (RouteInArr) =>
          <ListItem className="hover-underline-animation">
            <Link to={RouteInArr.RouteTo}>{RouteInArr.name}</Link>
          </ListItem>
        )}
      </UnorderedList>
    </Flex>
  );
};

export default Navbar;
