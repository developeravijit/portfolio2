import Navbar from '../components/Header/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'


const Wrapper = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default Wrapper