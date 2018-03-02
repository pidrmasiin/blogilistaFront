import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'

describe('<App />', () => {
  let app

  describe('when user is not logged', () => {

  beforeEach(() => {
    app = mount(<App />)
  })

  it('renders loginForm', () => {
    app.update()
    const blogComponents = app.find('.blogit')
    expect(blogComponents.length).toBe(0)
  })
})

describe('when user is logged in', () => {
  const user = {
    username: 'tester',
    token: '1231231214',
    name: 'Teuvo Testaaja'
  }
  
  beforeEach(() => {
    localStorage.setItem('loggedAppUser', JSON.stringify(user))
    app = mount(<App />)
    
  })


  it('renders blogs', () => {
    app.update()
    const blogComponents = app.find('.blogit')
    expect(blogComponents.length).toBe(1)
    })
  })
})