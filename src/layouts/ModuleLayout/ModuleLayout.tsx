import React from 'react'

import { Container, Footer, Header } from './components'

export const ModuleLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}
