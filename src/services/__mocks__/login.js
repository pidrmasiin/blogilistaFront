const user = {
    username: 'tester',
    token: '1231231214',
    name: 'Teuvo Testaaja'
  }

const login = () => {
    console.log('tääl', Promise.resolve(user))
    return Promise.resolve(user)
  }

  export default login