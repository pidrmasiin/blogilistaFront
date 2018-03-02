import React from 'react'

const AddBlogForm = ({ addBlog, title, url, author, onChange }) => {

    return (
      <div>
      <h3>Uusi blogi</h3>
      <form onSubmit={addBlog}>
      Title
      <input 
      name="title"
      value={title}
      onChange={onChange }
      />
      Author
      <input
      name="author"
      value={author}
      onChange={onChange }
      />
      Url
      <input
      name="url"
      value={url}
      onChange={onChange }
      />
      <button style={{color: 'green'}} type="submit"> Lisää</button>
      </form>
      </div>
    )
}

export default AddBlogForm