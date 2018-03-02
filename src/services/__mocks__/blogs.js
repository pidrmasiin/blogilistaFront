let token = null

const blogs = [
    {
    _id: "5a956d2004121d3653587f2a",
    title: "Real Pedron Blogi",
    author: "Pedro",
    url: "sivut",
    likes: 5219,
    user: "5a8e9bb1c199d51ed7e6b28d",
    __v: 0
    },
    {
    _id: "5a96dffeeb52b01d2dd89f6d",
    title: "Uudet jutut",
    author: "Vitsiniekka",
    url: "kotisivut",
    likes: 2,
    __v: 0
    },
    {
    _id: "5a96e03deb52b01d2dd89f6e",
    title: "Vanhat vitsit",
    author: "Väsynyt läppämies",
    url: "huhuah",
    likes: 3,
    __v: 0
    },
    {
    _id: "5a96e0abeb52b01d2dd89f6f",
    title: "Blogistaja",
    author: "Bloggaaja",
    url: "sivut",
    likes: 1,
    __v: 0
    },
    {
    _id: "5a96e0e3eb52b01d2dd89f70",
    title: "Kujeet",
    author: "uudet",
    url: "s",
    likes: 5,
    __v: 0
    }]

    const setToken = (newToken) => {
        token = `bearer ${newToken}`
        return token
      }

    const getAll = () => {
        return Promise.resolve(blogs)
      }
      
      export default { getAll, blogs, setToken }