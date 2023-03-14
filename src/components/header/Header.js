import React from 'react';

const Header = () => {

  return (
    <header id='targetForBurgerMenu' className='headerMainWrapper header-area clearfix'>
            
            <div className="nav-close">
                <a href='#targetForBurgerMenuClose'><i className="fa fa-close" aria-hidden="true"></i></a>
            </div>
            
            <div className="logo">
                <a><span>Aurax</span>Reiki</a>
            </div>
            <nav className="amado-nav">
                <ul>
                    <li className=""><a href="/">Home</a></li>
                    <li><a href="#about" id='testaboutjs'>About</a></li>
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