import {Outlet} from 'react-router-dom'
import Navbar from "../components/Navabar/Navbar";

const Layout = () => {
  return (
    <>
       <Navbar/>
       <div className="container mt-15">
        <Outlet />
      </div>
    </>
  )
}
export default Layout;
