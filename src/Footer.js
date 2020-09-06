import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
          <h4>last update: {new Date().toDateString()}</h4>
        </div>
    )
  }
export default Footer;