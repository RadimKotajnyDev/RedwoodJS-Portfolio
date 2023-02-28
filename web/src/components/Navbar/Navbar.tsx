import { Link, NavLink, routes } from "@redwoodjs/router";
import { Button, chakra, Flex, ListItem, Spacer, UnorderedList } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <chakra.nav>
     <Flex>
       <Button
         m={20}
         colorScheme="teal"
         variant="outline"
         _hover={{
           background: "teal.500",
           color: "white",
           borderColor: "teal.500"
         }}
         _active={{
           background: "teal.500",
           color: "white",
           borderColor: "teal.500"
         }}
       >
         <Link to={routes.home()}>HOME</Link>
       </Button>
       <Spacer />
       <UnorderedList
         display="flex"
         styleType="none"
         lineHeight={2}
         m={20}
       >
         <ListItem className="hover-underline-animation"
         >
           <Link to={routes.about()}>About</Link>
         </ListItem>
         <ListItem className="hover-underline-animation"
         ml={10}
         >
           <Link to={routes.hobby()}>
             Hobby
           </Link>
         </ListItem>
         <ListItem className="hover-underline-animation"
           ml={10}>
           <Link to={routes.work()}>Work</Link>
         </ListItem>
         <ListItem className="hover-underline-animation"
           ml={10}>
           <Link to={routes.contact()}>Contact</Link>
         </ListItem>
       </UnorderedList>
     </Flex>
    </chakra.nav>
  )
}

export default Navbar
