import React from 'react'
import Navigation from '../Navigation/Navigation'
import SideBar from '../SideBar/SideBar'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
  return (
    <div>
       <Navigation />
       {/* <SideBar /> */}
       <div className="main">
           {children}
       </div>

       <Footer />
    </div>
  )
}

export default Layout
