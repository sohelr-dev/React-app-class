import { Link } from "react-router-dom"
function Footer() {
  return (
    <>
          <div className="container text-center">
          <small >Copyright &copy; <Link to="https://sohelit.com/eventhub">SOHEL RANA</Link> {new Date().getFullYear()} All rights reserved</small>
          
          </div>
    </>
  )
}

export default Footer