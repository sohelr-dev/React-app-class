import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.bundle.js';
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/layout/Navbar.tsx'

const ProjectRouter= createBrowserRouter([
  {path:'/',element:<App/>,
    children:[
    // {path: '/',element: <Header/>}
  ]
  }
  
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={ProjectRouter}/>
  </StrictMode>,
)
