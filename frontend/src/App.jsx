import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import Single from './pages/Article'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Write from './pages/Write'
import { useEffect, useState } from 'react'
import axios from 'axios'


const Layout = () => {

  const [posts, setPosts] = useState({});
  const url = 'http://localhost:8080/';
  

  const getPosts = () => {

    axios.get(`${url}api/posts`)
    .then((response) => {
      const result = response
      console.log(result.data);
      setPosts(response.data)
    }).catch(err => console.error(`Error ${err}`))
  }

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <>
      <Navbar />
      <Outlet context={[posts, setPosts]}/>
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/post/:id",
        element: <Single />
      },
      {
        path: "/write",
        element: <Write />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/login",
        element: <Login />
      }
    ]
  }
  
])

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <div className='container'>
        <RouterProvider router={router} /> 
      </div>
    </div>
  )
}



export default App
