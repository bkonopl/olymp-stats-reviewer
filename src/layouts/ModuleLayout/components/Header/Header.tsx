import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Container } from '../Container'

export const Header: React.FC = () => {
  const [show, setShow] = useState(false)
  const handleToggle = () => setShow(!show)
  return (
    <Box>
      <Container>
        <Flex
          align="center"
          as="nav"
          color="white"
          justify="space-between"
          paddingY="1.5rem"
          wrap="wrap"
        >
          <Flex align="center" mr={5}>
            <Heading as="h1" cursor="pointer" letterSpacing="-.1rem" size="lg">
              <NavLink to="/search">Olymp Stats</NavLink>
            </Heading>
          </Flex>

          <Box cursor="pointer" display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
            <svg fill="white" viewBox="0 0 20 20" width="12px" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </Box>

          <Box
            alignItems="center"
            display={[show ? 'block' : 'none', show ? 'block' : 'none', 'flex', 'flex']}
            flexGrow={1}
            width={['full', 'full', 'auto', 'auto']}
          >
            <Box fontSize="xl" ml={[0, 0, '20px', '20px']} mt={['20px', '20px', 0, 0]}>
              <NavLink to="/faq">FAQ</NavLink>
            </Box>
            <Box fontSize="xl" ml={[0, 0, '20px', '20px']} mt={['20px', '20px', 0, 0]}>
              <NavLink to="/contribute">Contribute</NavLink>
            </Box>
          </Box>

          <Box
            display={[show ? 'block' : 'none', show ? 'block' : 'none', 'block', 'block']}
            mt={['20px', '20px', 0, 0]}
          >
            <Button bg="transparent" border="1px">
              <NavLink to="/search">Search</NavLink>
            </Button>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
