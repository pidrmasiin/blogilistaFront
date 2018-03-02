import React from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import AddBlogForm from './components/AddBlogForm'
import AuthInput from './components/AuthInput'
import blogService from './services/blogs'
import loginService from './services/login'
import Togglable from './components/Togglable'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [],
      username: '',
      password: '',
      user: null,
      author: '',
      title: '',
      notification: '',
      url: ''
    }
  }
  
  componentDidMount() {
    blogService
      .getAll()
      .then(blogs =>
        this.setState({ blogs })
      )
    
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.setState({user})
      blogService.setToken(user.token)
    }
   
  } 

  login = async (event) => {
    event.preventDefault()
    try{
      const user = await loginService.login({
        username: this.state.username,
        password: this.state.password
      })
      
      window.localStorage.setItem('loggedAppUser', JSON.stringify(user))
      blogService.setToken(user.token)
      this.setState({ username: '', password: '', user})
      
    } catch(exception) {
      this.notify('käyttäjätunnus tai salasana virheellinen')
      }
  }

  notify = (notification) => {
    this.setState({ notification })
    setTimeout(() => {
      this.setState({ notification: '' })
    }, 5000)
  }

  addBlog = async (event) => {
    event.preventDefault()
    const newBlog = {
      title: this.state.title,
      author: this.state.author,
      url: this.state.url
    }
    try {
      await blogService.add(newBlog)
    
      
      this.setState({
        blogs: this.state.blogs.concat(newBlog),
        title: '',
        author: '',
        url: ''
      })
      this.notify('Uusi blog nimeltä '+ newBlog.title + ' lisätty. Luojana ' + newBlog.author)
      this.componentDidMount()
    } catch(exception) {
      this.notify('title tai url puuttuu ')
      
  }
}

  logout = () => {
    window.localStorage.removeItem('loggedAppUser')
  }

  handleLoginFieldChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  like =(blog) => {
    return() => {
   
      const changedBlog = {...blog, likes: blog.likes + 1}

      blogService
      .put(blog._id, changedBlog)
      .then(changedBlog => {
        this.setState({
          blogs: this.state.blogs.map(x => x.id !== blog._id ? x : changedBlog)
        })
        this.notify('Tykätty blogista + ' + blog.title + ' + newBlog.author')
        this.componentDidMount()
      })
      
     .catch(error => {
      this.notify('Jotain meni vikaan')
     })
  }
  }

  remove =(blog) => {
    return() => {
    const ok = window.confirm(`Poistetaanko ` + blog.title)

    if (!ok) {
      return
    }
      

      blogService
      .remove(blog._id)
      .then(response => {
        this.setState({
          blogs: this.state.blogs.filter(x => x.id !== blog._id)
        })
        this.notify(blog.title + ' poistettu')
        this.componentDidMount()
      })
      
     .catch(error => {
      this.notify('Jotain meni vikaan')
     })
  }
  }



  render() {
    this.state.blogs.sort((a,b) => a.likes < b.likes)
    if (this.state.user === null) {
      return (
        <div className="auth">
          <Notification message={this.state.notification}/>
          <Togglable buttonLabel="Kirjaudu">
          <AuthInput 
          handleSubmit={this.login} 
          onChange={this.handleLoginFieldChange}
          username={this.state.username}
          password={this.state.password}
          />
          </Togglable>
    
        </div>
      )
    }
    return (
      <div className="blogi">
        <h2>blogs</h2>
        <Notification message={this.state.notification} />
         <div>
         <a> {this.state.user.name} has logged in</a>   
         <form onSubmit={this.logout}> 
         <button type="submit"> log out</button>
         </form>
        </div>
        <Togglable buttonLabel="Lisää blogi">
        <AddBlogForm 
        addBlog={this.addBlog}
        url={this.state.url}
        author={this.state.author}
        title={this.state.title}
        onChange={this.handleLoginFieldChange}
        />
        </Togglable>
        <div>
        <h3>Blogit</h3>
        {this.state.blogs.map(blog =>
           <Togglable key={blog._id} buttonLabel={blog.title}>
          <Blog key={blog._id} blog={blog} handleSubmit={this.like} remove={this.remove}/>
          </Togglable>
        )}
        </div>
      </div>
    );
  }
}

export default App;
