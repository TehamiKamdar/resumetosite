import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Layout = ({children}) =>{
  return(
    <div className="min-h-screen bg-[#0c0f0a] font-['Inter',sans-serif]">
      <Navbar />

      <main>
        {children}
      </main>
      
      <Footer />
    </div>
  )
}

export default Layout