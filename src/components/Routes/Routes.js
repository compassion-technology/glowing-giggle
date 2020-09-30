import React from 'react'
import { Switch, Route, Router } from 'react-router'

import Home from '@pages/Home'
import Register from '@pages/Register'
import Beneficiaries from '@pages/Beneficiaries'
import SponsorContactData from '@pages/SponsorContactData'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/register' component={Register} />
    <Route exact path='/beneficiaries/:id' component={Beneficiaries} />
    <Route exact path='/sponsor/:id' component={SponsorContactData} />
  </Switch>
)

export default Routes
