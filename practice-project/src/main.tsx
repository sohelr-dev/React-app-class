import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.tsx'
// import'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './assets/custom.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout.tsx';
// import Navbar from './components/layout/Navbar.tsx';
import Dashboard from './components/pages/Dashboard.tsx';
import Products from './components/pages/Products.tsx';
import ManagePost from './components/pages/post/ManagePost.tsx';
import CreatePost from './components/pages/post/CreatePost.tsx';
import DetailsPost from './components/pages/post/DetailsPost.tsx';
import EditPost from './components/pages/post/EditPost.tsx';

const PractiseApp = createBrowserRouter([
  {
    path: '/', element: <Layout />,
    children: [
      {index: true, element:<Dashboard/>},
      {path: '/dashboard', element:<Dashboard/>},
      {path: '/products', element:<Products/>},
      {path: '/sales', element:<h1>Sales</h1>},
      {path: '/users', element:<h1>Users</h1>},
      {path: '/roles', element:<h1>Roles</h1>},
      {path: '/posts', element:<ManagePost/>},
      {path: '/post/create', element:<CreatePost/>},
      {path: '/post/:id', element:<DetailsPost/>},
      {path: '/post/edit/:id', element:<EditPost/>},
    ]
  },
  {path: '/pos', element:<h1>Pos</h1>},
  {path: '/login', element:<h1>Login</h1>},
  { path: '*', element: <h1 className='text-danger text-danger'>Not Fund</h1> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={PractiseApp} />
  </StrictMode>,
)
