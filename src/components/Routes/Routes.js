import React from 'react'
import { Switch, Route, Router } from 'react-router'

import Home from '@pages/Home'
import Register from '@pages/Register'
import Beneficiaries from '../../pages/Beneficiaries'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/register' component={Register} />
    <Route exact path='/beneficiaries/' component={Beneficiaries} />
  </Switch>
)

export default Routes
