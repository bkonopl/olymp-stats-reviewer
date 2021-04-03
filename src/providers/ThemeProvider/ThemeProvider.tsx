import { ThemeProvider as ChakraThemeProvider, CSSReset } from '@chakra-ui/react'
import React from 'react'

import { theme } from './theme'

export const ThemeProvider: React.FC = ({ children }) => {
  return (
    <ChakraThemeProvider theme={theme}>
      <CSSReset />
      {children}
    </ChakraThemeProvider>
  )
}
