import React from 'react'
import { Switch, Route } from 'react-router'

import Home from '@pages/Home'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
  </Switch>
)

export default Routes
