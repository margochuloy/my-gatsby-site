import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
  margin: auto;
  max-width: 500px;
  font-family: sans-serif;
`
const Heading = styled.h1`
  color: rebeccapurple;
`
const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
`
const NavLinksItem = styled.li`
padding-right: 2rem;
`
const Layout = ({ pageTitle, children }) => {
  return (
    <Container>
      <title>{pageTitle}</title>
      <nav>
        <NavLinks>
          <NavLinksItem>
            <Link to="/">Home</Link>
          </NavLinksItem>
          <NavLinksItem>
            <Link to="/about">About</Link>
          </NavLinksItem>
        </NavLinks>
      </nav>
      <main>
        <Heading>{pageTitle}</Heading>
        {children}
      </main>
    </Container>
  )
}

export default Layout