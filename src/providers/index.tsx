import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'

import { CatchModalProvider } from './CatchModalProvider'
import { ThemeProvider } from './ThemeProvider'

export { useCatchModal } from './CatchModalProvider'

export const Providers: React.FC = ({ children }) => {
  return (
    <React.StrictMode>
      <ChakraProvider>
        <ThemeProvider>
          <CatchModalProvider>{children}</CatchModalProvider>
        </ThemeProvider>
      </ChakraProvider>
    </React.StrictMode>
  )
}
