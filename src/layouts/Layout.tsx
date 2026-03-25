import Navbar from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"
import { SpeedInsights } from "@vercel/speed-insights/react"
const Layout = () =>{
  return(
    <div className="min-h-screen bg-[#0c0f0a] font-['Inter',sans-serif]">
      <Navbar />

      <main>
        <Outlet />        
      </main>
      
      <Footer />
      <SpeedInsights />
    </div>
  )
}

export default Layout