import { Navbar } from "../../components/Nav"
import Footer from "../../components/Footer"

import { Outlet } from "react-router-dom"

export const FullWithLayout = () => {
  return (
    <div className="App">
      <div className="frente">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  )
}
