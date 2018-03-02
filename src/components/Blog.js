import React from 'react'

const Blog = ({blog, handleSubmit, remove}) => (
  <table>
    <tbody>
    <tr>
    <th>Title</th>
    <th>Author</th>
    <th>Url</th>
    <th>Likes</th>
    <th></th>
    <th>Creator's id</th>
    <th></th>
  </tr>
  <tr>
    <td>{blog.title}</td>
    <td>{blog.author}</td>
    <td>{blog.url}</td>
    <td>{blog.likes}</td>
    <td><button  style={{color: 'green'}} onClick={handleSubmit(blog)}>Like</button></td>
    <td>{blog.user}</td>
    <td><button style={{color: 'red'}} onClick={remove(blog)}>Poista</button></td>
  </tr> 
  </tbody>
    </table>
 
)

export default Blog