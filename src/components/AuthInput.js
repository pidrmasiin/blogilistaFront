import React from 'react'

const AuthInput = ({ handleSubmit, username, password, onChange }) => {

    return (
   <div>
<h2>Kirjaudu</h2>

<form onSubmit={handleSubmit}>
    <div>
        käyttäjätunnus
         <input
          value={username}
         onChange={onChange}
         name="username"
         />
        </div>
        <div>
        salasana
         <input
          type="password"
         name="password"
        value={password}
         onChange={onChange}
        />
        </div>
        <button style={{color: 'green'}} type="submit">Kirjaudu</button>
        </form>
    </div>
    )
}

export default AuthInput