import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
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
            <Heading as="h1" letterSpacing="-.1rem" size="lg">
              Olymp Stats
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
            display={{ sm: show ? 'block' : 'none', md: 'flex' }}
            flexGrow={1}
            width={{ sm: 'full', md: 'auto' }}
          >
            <Box fontSize="xl" ml="20px">
              <NavLink to="/faq">FAQ</NavLink>
            </Box>
            <Box fontSize="xl" ml="20px">
              <NavLink to="/contribute">Contribute</NavLink>
            </Box>
          </Box>

          <Box display={{ sm: show ? 'block' : 'none', md: 'block' }} mt={{ base: 4, md: 0 }}>
            <Button bg="transparent" border="1px">
              Search
            </Button>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
