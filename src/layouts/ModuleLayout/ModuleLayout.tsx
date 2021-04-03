import React from 'react'
import { Container } from 'react-bootstrap'

import { Footer, Header } from './components'

export const ModuleLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  )
}
