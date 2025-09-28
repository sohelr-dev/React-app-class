import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx'
import Users from './components/pages/Users.tsx';
import Dashboard from './components/pages/Dashboard.tsx';
import Page404 from './components/pages/Page404.tsx';
import Login from './components/pages/login.tsx';

const AppRouter =createBrowserRouter([
  {path:"/" ,element:<App/>,
    children:[
      {path:"/dashboard" ,element: <Dashboard/>},
      {path:"/users" ,element: <Users/>}
    ]
  },
  {path:'/login' ,element :<Login/>},
  {path:'/*' ,element :<Page404/>}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={AppRouter} />
  </StrictMode>,
)
