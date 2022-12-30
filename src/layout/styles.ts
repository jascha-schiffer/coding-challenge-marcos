import styled, {createGlobalStyle} from 'styled-components'
import {NavLink} from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`

export const NavColumn = styled.div`
  flex: auto;
`

export const ContentColumn = styled.div`
  flex: auto;
`

export const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

export const NavListItem = styled.li`
  padding: 8px 0;
`

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  &.active {
    font-weight: bold;
    color: #3d3d3d;
  }
`

export const GlobalStyle = createGlobalStyle`
  body {
    color: #4b4b4b;
  }
`
