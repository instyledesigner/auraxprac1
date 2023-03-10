import React from 'react';
import logo from '../../img/core-img/logo.png';

const Header = () => {
  return (
    <header className='headerMainWrapper header-area clearfix'>
            
            <div className="nav-close">
                <i className="fa fa-close" aria-hidden="true"></i>
            </div>
            
            <div className="logo">
                <a href="index.html"><img src={logo} alt="" /></a>
            </div>
            
            <nav className="amado-nav">
                <ul>
                    <li className="active"><a href="index.html">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#eventgallery">Event Gallery</a></li>
                    
                </ul>
            </nav>
            
            <div className="social-info d-flex justify-content-center pt-5">
                <span className='pr-3'><i className="fa fa-instagram" aria-hidden="true"></i></span>
                <span><i className="fa fa-facebook" aria-hidden="true"></i></span>
            </div>

    </header>
  )
}

export default Header