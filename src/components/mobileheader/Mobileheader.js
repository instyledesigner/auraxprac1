import React from 'react'
import logo from '../../img/core-img/logo.png';

const Mobileheader = () => {
  return (
    <div className="mobile-nav">
            
            <div className="amado-navbar-brand">
                <a href="index.html"><img src={logo} alt="" /></a>
            </div>
            
            <div className="amado-navbar-toggler">
                <span></span><span></span><span></span>
            </div>
    </div>
  )
}

export default Mobileheader