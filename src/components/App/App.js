import React from 'react'
import { createBrowserHistory } from 'history'
import { Router } from 'react-router-dom'

import Routes from '@components/Routes'

const history = createBrowserHistory()

const App = () => {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  )
}

export default App
