import React from 'react';
import './Productitem.css';
import Productlist from './Productlist';

const Productitem = () => {
  return (
    
    Productlist.map((item) => (
        
        <div key={item.id} className="single-products-catagory clearfix">
          <div id="backtolink" >
            <a>
                <img src={require(`../../img/product-img/${item.productthumb}.jpg`)} alt="" />
                <div className="hover-content">
                    <div className="line"></div>
                    <p>₹{item.cost}</p>
                    <h4>{item.name}</h4>
                    <p><a href={item.pplink} onclick="event.preventDefault();">product link</a></p>
                </div>
            </a>
        </div>
        <div className="popuptextbox" id={item.pplinkid}>
          <a href={`#{item.id}`} className="close2"></a>
          <div className="popupcontent" id={item.pplinkid}>
            <p className='text-center'><img src={require(`../../img/product-img/${item.productthumb}.jpg`)} alt="" /></p>
            <h5><strong>{item.name}</strong></h5>
            <p>{item.description}</p>
            <a href={'https://wa.me/918401065610?text=' + item.name + item.cost}>Buy me this.</a>
          </div>
          
        </div>
        </div>
    )
    )
    
  )
}

export default Productitem