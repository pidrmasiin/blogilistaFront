import React from 'react'
import { shallow } from 'enzyme'
import SimpleBlog from './SimpleBlog'

describe.only('<SimpleBlog />', () => {
    const blog = {
        title: 'Otsikko',
        author: 'Testaaja',
        likes: 10
      }

    it('renders content', () => {
    const blogComponent = shallow(<SimpleBlog blog={blog} onClick={null} />)
    const titleDiv = blogComponent.find('.titleAndAuthor')
    expect(titleDiv.text()).toContain(blog.title)
    expect(titleDiv.text()).toContain(blog.author)

    const likeDiv = blogComponent.find('.likes')
    expect(likeDiv.text()).toContain(blog.likes)
    })

    it('clicking the button calls event handler twice', () => {
    
    const mockHandler = jest.fn()
  
    const blogComponent = shallow(
        <SimpleBlog blog={blog} onClick={mockHandler} />
    )
  
    const button = blogComponent.find('button')
    button.simulate('click')
    button.simulate('click')
    expect(mockHandler.mock.calls.length).toBe(2)
  })

})