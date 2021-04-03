import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'

import { ThemeProvider } from './ThemeProvider'

export const Providers: React.FC = ({ children }) => {
  return (
    <React.StrictMode>
      <ChakraProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </ChakraProvider>
    </React.StrictMode>
  )
}
