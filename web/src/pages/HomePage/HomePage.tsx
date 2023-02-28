import { Box, Text, Center, chakra, Image, Flex, Container, Spacer } from "@chakra-ui/react";
import { MetaTags } from "@redwoodjs/web";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import "src/index.css"


const HomePage = () => {
  return (
    <>
      <MetaTags
        title="Radim Kotajny Portfolio"
        description="Radim Kotajny Portfolio Website"
      />
      <Flex>
        <Flex as="div"
              direction="column"
              ml={100}>
          <TypeAnimation
            omitDeletionAnimation={true}
            wrapper="h1"
            className="h1-text"
            sequence={[
              '<h1>Radim Kotajny</h1>',
              1500,
              'Radim Kotajny'
            ]} />
          <TypeAnimation sequence={[4500, "Frontend Developer."]}
                         wrapper="h2"
                         cursor={false}
                         className="h2-text"/>
        </Flex>
        <Spacer />
        <Box boxSize="xl">
          <Image src="/RadimLogo.png" alt="Radim Kotajny Logo" />
        </Box>
      </Flex>
    </>
  );
};

export default HomePage;

/*
<motion.div
          initial={{ opacity: .75 }}
          transition={{ duration: 2 }}
          animate={{ opacity: 0 }}>
          <chakra.h1
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="6xl"
          >
            &lt;h1&gt;
          </chakra.h1>
        </motion.div>
        <chakra.h1
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight={900}
        >
          Radim Kotajny <br /> Frontend developer
        </chakra.h1>
        <motion.div
          initial={{ opacity: 1 }}
          transition={{ duration: 2 }}
          animate={{ opacity: 0 }}>
          <chakra.h1
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="thin"
          >
            <br />&lt;/h1&gt;
          </chakra.h1>
        </motion.div>
        <Box boxSize="lg">
          <Image src="/RadimLogo.png" alt="Radim Kotajny Logo" />
        </Box>
 */
