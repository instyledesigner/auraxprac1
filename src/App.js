import React from 'react';
import '../src/scss/style.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Mobileheader from './components/mobileheader/Mobileheader';
import Productlanding from './components/productlanding/Productlanding';
import About from './components/about/About';
import Testimonials from './components/testimonials/Testimonials';
import Backtotop from './components/backtotop/Backtotop';
import Eventgallery from './components/eventgallery/Eventgallery';

function App() {
  
  return (
    <div id="mainAppWrapper" className="App">
      
      <div className="main-content-wrapper d-flex clearfix">
        <Mobileheader />
        <Header />
        <Productlanding />
      </div>
      <About />
      <Testimonials />
      <Eventgallery />
      <Backtotop />
      <Footer />
    </div>
  );
}

export default App;
