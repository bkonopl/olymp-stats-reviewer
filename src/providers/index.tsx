import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'

export const Providers: React.FC = ({ children }) => {
  return (
    <React.StrictMode>
      <ChakraProvider>{children}</ChakraProvider>
    </React.StrictMode>
  )
}
