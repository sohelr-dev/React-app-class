import './Sidebar.css'
import Profile from '../../../assets/img/sohel.jpg'
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
    <>
      <div id='sidebar'>
        <h4 className='text-center'>SOHEL ADMIN</h4>
        <div className="text-center mb-4">
          <img src={Profile} width={80} height={80} className='rounded-circle'/>
          <h5 className='mt-2 mb-0'>Sohel Rana</h5>
          <small className='text-light'>Admin</small>
        </div>
        <nav className='navber'>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/" className="nav-link text-light link-navbar"><i className="fa-regular fa-chart-bar fa-fade me-2"></i> Dashboard</Link>
            </li>
          </ul>
        </nav>

      </div>
    </>
  )
}

export default Sidebar