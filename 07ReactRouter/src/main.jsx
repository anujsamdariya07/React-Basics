import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home, About, Contact, Layout, User, Github, githubInfoLoader } from './components/'

// const router = createBrowserRouter([
//   {
//     path: '/', 
//     element: <Layout />, 
//     children: [
//       {
//         path: '', 
//         element: <Home />
//       }, 
//       {
//         path: 'about', 
//         element: <About />
//       }, 
//       {
//         path: 'contact', 
//         element: <Contact />
//       }
//     ]
//   }
// ])

// Another way of making router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:userId' element={<User/>} />
      <Route loader={githubInfoLoader} path='github' element={<Github/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
