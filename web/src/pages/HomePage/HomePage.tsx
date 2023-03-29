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
  return (
    <>
      <MetaTags
        title="Radim Kotajny"
        description="Radim Kotajny Portfolio Website"
      />
      <Box>
        <Flex>
          <Flex as="div" direction="column" ml={{
            base: 10,
            md: 100
          }}>
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
        </Flex>
      </Box>
    </>
  )
}

export default HomePage
