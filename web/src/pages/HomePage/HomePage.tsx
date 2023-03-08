import { Box, Image, Flex, Spacer, chakra, shouldForwardProp } from '@chakra-ui/react'

import { TypeAnimation } from 'react-type-animation'

import { MetaTags } from '@redwoodjs/web'
import 'src/index.css'

import { motion, isValidMotionProp } from 'framer-motion';

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});


const HomePage = () => {
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return (
    <>
      <MetaTags
        title="Radim Kotajny Portfolio"
        description="Radim Kotajny Portfolio Website"
      />
      <Box>
        <Flex>
          <Flex as="div" direction="column" ml={100}>
            <TypeAnimation
              cursor={false}
              //omitDeletionAnimation={true}
              wrapper="h1"
              className="h1-text"
              speed={25}
              sequence={['Radim Kotajny', 1500]}
            />
            <TypeAnimation
              speed={50}
              sequence={[1500, 'Frontend Developer.']}
              wrapper="h2"
              cursor={false}
              className="h2-text"
            />
          </Flex>
          <Spacer />
          <ChakraBox
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 4, duration: 0.5 }}
            boxSize="2xl" pos="absolute" ml="60vw">
            <Image src="/RadimLogo.png" alt="Radim Kotajny Logo" />
          </ChakraBox>
        </Flex>
        <ChakraBox
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 3, duration: 0.5 }}
          boxSize="3xl">
          <Image src="/welcome.png" alt="welcome code" />
        </ChakraBox>
      </Box>
    </>
  )
}

export default HomePage

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
