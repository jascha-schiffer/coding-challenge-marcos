import React from 'react'

import {routes, redirects} from './routes'
import SimpleRouter from './components/simple-router'
import DefaultLayout from './layout'

function App() {
  return <SimpleRouter routes={routes} redirects={redirects} defaultLayout={DefaultLayout} />
}

export default App
