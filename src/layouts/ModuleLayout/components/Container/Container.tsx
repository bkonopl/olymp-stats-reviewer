import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'

const defaultOptions: BoxProps = {
  mx: 'auto',
  maxWidth: ['calc(100% - 40px)', 'calc(100% - 40px)', '768px', '1252px'],
}

export const Container: React.FC<BoxProps> = ({ children }) => {
  return <Box {...defaultOptions}>{children}</Box>
}
