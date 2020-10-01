import React from 'react'
import { Switch, Route } from 'react-router'

import Home from '@pages/Home'
import Register from '@pages/Register'
import Beneficiaries from '@pages/Beneficiaries'
import SponsorContactData from '@pages/SponsorContactData'
import PhotoViewer from '@pages/PhotoViewer'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/register' component={Register} />
    <Route exact path='/beneficiaries/:id' component={Beneficiaries} />
    <Route exact path='/sponsor/:id' component={SponsorContactData} />
    <Route exact path='/photo' component={PhotoViewer} />
  </Switch>
)

export default Routes
