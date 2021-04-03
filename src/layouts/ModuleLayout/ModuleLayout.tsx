import React from 'react'

import { Footer, Header } from './components'

export const ModuleLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
