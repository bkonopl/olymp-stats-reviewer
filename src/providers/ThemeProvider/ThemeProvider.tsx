import {
  ThemeProvider as ChakraThemeProvider,
  CSSReset,
  theme,
  ColorModeProvider,
} from '@chakra-ui/react'
import React from 'react'

export const ThemeProvider: React.FC = ({ children }) => {
  return (
    <ChakraThemeProvider theme={theme}>
      <ColorModeProvider options={{ initialColorMode: 'dark' }}>
        <CSSReset />
        {children}
      </ColorModeProvider>
    </ChakraThemeProvider>
  )
}
