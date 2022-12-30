import React from 'react'
import * as PropTypes from 'prop-types'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import {InferPropTypes} from '../../types/helper/react'
import {withLayout} from './utils'

const propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      component: PropTypes.elementType.isRequired,
      layout: PropTypes.elementType,
    }).isRequired
  ).isRequired,
  redirects: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      redirectTo: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  defaultLayout: PropTypes.elementType.isRequired,
}
const defaultProps = {}

type SimpleRouterProps = InferPropTypes<typeof propTypes, typeof defaultProps>

const SimpleRouter: React.FC<SimpleRouterProps> = ({routes, redirects, defaultLayout}) => {
  const preparedRoutes = routes.map(route => withLayout(route, defaultLayout))

  return (
    <BrowserRouter>
      <Switch>
        {redirects.map(redirect => (
          <Redirect key="redirect" exact path={redirect.path} to={redirect.redirectTo} />
        ))}
        {preparedRoutes.map(route => {
          if (typeof route.component === 'string') {
            return null
          }
          return <Route key="route" path={route.path} exact component={route.component!} />
        })}
      </Switch>
    </BrowserRouter>
  )
}

SimpleRouter.propTypes = propTypes
SimpleRouter.defaultProps = defaultProps

export default SimpleRouter
