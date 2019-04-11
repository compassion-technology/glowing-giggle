import React from 'react'
import { shallow } from 'enzyme'

import App from './App'

describe('App', () => {
  it('should render App component', () => {
    const component = shallow(<App />)
    expect(component).toBeDefined()
  })
})
