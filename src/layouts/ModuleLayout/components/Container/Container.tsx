import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'

export const Container: React.FC<BoxProps> = ({ children }) => {
  return <Box>{children}</Box>
}
