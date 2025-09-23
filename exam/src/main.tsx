import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.bundle.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home.tsx';
import About from './About.tsx';
import Contact from './Contact.tsx';


const Approuter = createBrowserRouter([
  {
    path:'/',element:<App/>,
    children:[
      {path:'home',element:<Home/>},
      {path:'about',element:<About/>},
      {path:'contact',element:<Contact/>},
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={Approuter}/>
  </StrictMode>,
)
