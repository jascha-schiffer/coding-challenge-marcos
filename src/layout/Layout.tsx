import React from 'react'
import * as PropTypes from 'prop-types'
import ms from 'ms'
import {InferPropTypes} from '../types/helper/react'
import {
  ContentColumn,
  NavColumn,
  Container,
  NavListItem,
  NavList,
  GlobalStyle,
  StyledNavLink,
} from './styles'
import {ROUTE_PAGE_A, ROUTE_PAGE_B} from '../routes/constants'
import WasteCycles from '../components/waste-cycles'

const propTypes = {
  children: PropTypes.node.isRequired,
}
const defaultProps = {}

type LayoutProps = InferPropTypes<typeof propTypes, typeof defaultProps>

const Layout: React.FC<LayoutProps> = ({children}) => (
  <Container>
    <GlobalStyle />
    <NavColumn>
      <h3>Navigation</h3>
      <NavList>
        <NavListItem>
          <StyledNavLink to={ROUTE_PAGE_A}>Page A</StyledNavLink>
        </NavListItem>
        <NavListItem>
          <StyledNavLink to={ROUTE_PAGE_B}>Page B</StyledNavLink>
        </NavListItem>
      </NavList>
    </NavColumn>
    <ContentColumn>{children}</ContentColumn>
    {/* mimicking a more complex layout which takes longer to render */}
    <WasteCycles duration={ms('200ms')} />
  </Container>
)

Layout.propTypes = propTypes
Layout.defaultProps = defaultProps

export default Layout
