import React from 'react'
import { Switch, Route, Router } from 'react-router'
import { createBrowserHistory } from 'history'

import Home from '@pages/Home'
// import PageNotFound from '@pages/PageNotFound'

const history = createBrowserHistory()

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={Home} />
      {/* <Route component={PageNotFound} /> */}
    </Switch>
  </Router>
)

export default Routes
