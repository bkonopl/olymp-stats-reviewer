import { Box, Flex, Heading, Input, Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { ModuleLayout } from 'src/layouts'

export const Search: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [focus, setFocus] = useState(false)

  const handleFocus = () => setFocus(true)

  useEffect(() => {
    if (focus) {
      setTimeout(() => setLoading(true), 900)
    }
  }, [focus])

  return (
    <ModuleLayout>
      <Box>
        <Box mt={focus ? '40px' : '300px'} transition="1s">
          <Heading as="h1" fontSize={!focus ? '3xl' : 'sm'} mb="20px" transition="1s">
            Find the olymp average fan
          </Heading>
          <Input fontSize="xl" height="60px" onFocus={handleFocus} />
        </Box>
        {loading && (
          <Flex alignItems="center" justifyContent="center" mt="150px" width="100%">
            <Spinner height="100px" width="100px" />
          </Flex>
        )}
      </Box>
    </ModuleLayout>
  )
}
