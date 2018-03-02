import React from 'react'
import { shallow, mount } from 'enzyme'
import AuthInput from './AuthInput'
import Togglable from './Togglable'

describe.skip('<Togglable />', () => {
  
    it('mount renders all components', () => {
    const username = 'Joku'
    const password= 'salis'

  const loginComponent = mount(
    <Togglable buttonLabel="show...">
    <AuthInput username={username} password={password}/>
    </Togglable>
  )

})

})
