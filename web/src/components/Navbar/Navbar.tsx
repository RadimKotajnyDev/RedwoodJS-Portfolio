import { Button, chakra, Flex, ListItem, Spacer, UnorderedList, useColorMode } from "@chakra-ui/react";
import {Link, NavLink, routes} from "@redwoodjs/router";
import {MdModeNight} from "react-icons/md"
import {motion} from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const sizeControl = () => {
    setWindowSize(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener("resize", sizeControl)
  }, [])

  const [mobileState, setMobileState] = useState(false)

  const routeNames = [
    {RouteTo: routes.home(), name: "Home", id: 0},
    {RouteTo: routes.about(), name: "About", id: 1},
    {RouteTo: routes.hobby(), name: "Hobby", id: 2},
    {RouteTo: routes.work(), name: "Work", id: 3},
    {RouteTo: routes.contact(), name: "Contact", id: 4}
  ]

  return (
    // @ts-ignore
    <Flex as="nav" align="center" className={`$mobileState ? "" : ""`}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          // @ts-ignore
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
        {routeNames.map( (RouteInArr) =>
          <ListItem key={RouteInArr.id} className="hover-underline-animation">
            <Link to={RouteInArr.RouteTo}>{RouteInArr.name}</Link>
          </ListItem>
        )}
        <ListItem className="border" />
        <ListItem>
          <Button
            onClick={() => toggleColorMode()}
            colorScheme="teal" variant="solid" m={-5} ml={.01}
          >
            <MdModeNight />
          </Button>
        </ListItem>
      </UnorderedList>
    </Flex>
  );
};

export default Navbar;
