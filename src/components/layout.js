import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
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
const SiteTitle = styled.h1`
font-size: 2rem;
color: gray;
font-weight: 700;
margin: 3rem 0;
`
const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Container>
      <SiteTitle>{pageTitle} | {data.site.siteMetadata.title}</SiteTitle>
      <nav>
        <NavLinks>
          <NavLinksItem>
            <Link to="/">Home</Link>
          </NavLinksItem>
          <NavLinksItem>
            <Link to="/about">About</Link>
          </NavLinksItem>
          <NavLinksItem>
            <Link to="/blog">Blog</Link>
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