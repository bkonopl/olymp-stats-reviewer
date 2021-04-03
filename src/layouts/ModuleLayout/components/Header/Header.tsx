import React from 'react'
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap'

export const Header: React.FC = () => {
  return (
    <Navbar>
      <Navbar.Brand href="/">Olympiads statistics</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link href="/faq">FAQ</Nav.Link>
          <Nav.Link href="/contribute">Contribute</Nav.Link>
          <Nav.Link href="/explore">Find the competitor</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl className="mr-sm-2" placeholder="Search" type="text" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}
