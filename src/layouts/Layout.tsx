import Navbar from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

const Layout = () =>{
  return(
    <div className="min-h-screen bg-[#0c0f0a] font-['Inter',sans-serif]">
      <Navbar />

      <main>
        <Outlet />        
      </main>
      
      <Footer />
    </div>
  )
}

export default Layout