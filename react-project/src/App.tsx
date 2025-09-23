import Footer from './components/layout/Footer'
import { Outlet } from 'react-router-dom'
import Layout from './components/layout/Layout'

function App() {

  return (
    <>
      <Layout/>
      <Outlet/>
      {/* <Footer/> */}
    </>
  )
}

export default App
