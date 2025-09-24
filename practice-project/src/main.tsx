import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.tsx'
// import'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './assets/custom.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout.tsx';
import Navbar from './components/layout/Navbar.tsx';
import Dashboard from './components/pages/Dashboard.tsx';

const PractiseApp = createBrowserRouter([
  {
    path: '/', element: <Layout />,
    children: [
      {index: true, element:<Dashboard/>},
      {path: 'product', element:<h1>Product Page</h1>},
    ]
  },
  { path: '*', element: <h1 className='text-danger text-danger'>Not Fund</h1> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={PractiseApp} />
  </StrictMode>,
)
