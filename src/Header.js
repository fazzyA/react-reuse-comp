import React from 'react'
import logo from './images/sos.png'

const Header = () => {
    return (
        <div className='header'>
          <div className='header-div'><h1><img src={logo} alt='tshirt shop' className='logo' /></h1></div>
          {/* <div className='header-div'><h1>Shopping Cart App</h1></div> */}
        </div>
    )
  }
export default Header;