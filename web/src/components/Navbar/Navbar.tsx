import {
  Button,
  chakra,
  Flex,
  IconButton,
  ListItem,
  shouldForwardProp,
  Spacer,
  UnorderedList,
  useColorMode
} from "@chakra-ui/react";
import { Link, NavLink, routes } from "@redwoodjs/router";
import { MdModeNight, MdWorkOutline } from "react-icons/md";
import { isValidMotionProp, motion } from "framer-motion";
import { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider
} from "@chakra-ui/react";

import {
  AiOutlineClose,
  AiOutlineCode,
  AiOutlineContacts,
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineMenu
} from "react-icons/ai";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpened, setOpen] = useState(false);

  const routeNames = [
    { RouteTo: routes.home(),
      name: "Home", MenuIcon: <AiOutlineHome />, id: 0 },
    { RouteTo: routes.about(),
      name: "About", MenuIcon: <AiOutlineInfoCircle />, id: 1 },
    { RouteTo: routes.hobby(),
      name: "Hobby", MenuIcon: <AiOutlineCode />, id: 2 },
    { RouteTo: routes.work(),
      name: "Work", MenuIcon: <MdWorkOutline />, id: 3 },
    { RouteTo: routes.contact(),
      name: "Contact", MenuIcon: <AiOutlineContacts />, id: 4 }
  ];

  return (
    <>
      <Flex as="nav" align="center"
            display={{
              base: "none",
              md: "flex"
            }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            // @ts-ignore
            transition={{ duration: 2, delay: 5 }}
      >
        <Spacer />
        <UnorderedList
          bg="black"
          color="white"
          display="flex"
          borderRadius="xl"
          styleType="none"
          mt={10} mr={10}
          p={5} px={10}
          mb={7} gap="25px"
        >
          {routeNames.map((RouteInArr) =>
            <ListItem key={RouteInArr.id} className="hover-underline-animation">
              <Link to={RouteInArr.RouteTo}>{RouteInArr.name}</Link>
            </ListItem>
          )}
          <ListItem className="border" />
          <ListItem>
            <Button
              // sorry blind people
              _focus={{
                outline: "none"
              }}
              onClick={() => {toggleColorMode(); console.log("Light attracts bugs... 👀")}}
              colorScheme="teal" variant="solid" m={-5} ml={.01}
            >
              <MdModeNight />
            </Button>
          </ListItem>
        </UnorderedList>
      </Flex>
      <Flex as="nav"
            display={{
              base: "flex",
              md: "none"
            }}
            m={10}
      >
        <Menu
          onOpen={() => setOpen(!isOpened)}
          onClose={() => setOpen(!isOpened)}
          colorScheme="teal">
          <MenuButton
            as={IconButton}
            // sorry blind people
            _focus={{
              outline: "none"
            }}
            size={15}
            p={3}
            aria-label="Options"
            icon={isOpened ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            variant="solid"
            colorScheme="primary"
          />
          <MenuList>
            {
              routeNames.map((RouteInArr) =>
                <Link key={RouteInArr.id} to={RouteInArr.RouteTo}>
                  <MenuItem icon={RouteInArr.MenuIcon}>
                    {RouteInArr.name}
                  </MenuItem>
                </Link>
              )}
            <hr />
            <MenuItem
              icon={<MdModeNight />}
              onClick={() => {toggleColorMode(); console.log("Light attracts bugs... 👀")}}>
              {
                colorMode === "dark" ? "Light" : "Dark"
              }
              &nbsp;mode
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </>
  );
};

export default Navbar;
