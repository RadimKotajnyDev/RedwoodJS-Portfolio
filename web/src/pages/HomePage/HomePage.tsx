import { Box, Text, Center, chakra, Image } from "@chakra-ui/react";
import { MetaTags } from "@redwoodjs/web";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <>
      <MetaTags
        title="Radim Kotajny Portfolio"
        description="Radim Kotajny Portfolio Website"
      />

      <Box display="flex">
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
      </Box>
    </>
  );
};

export default HomePage;
