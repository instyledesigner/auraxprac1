import React from 'react';
import Productlist from './Productlist';

const Productitem = () => {
  return (
    Productlist.map((item) => (
        <div key={item.id} className="single-products-catagory clearfix">
            <a href="shop.html">
                <img src={require(`../../img/product-img/${item.productthumb}.jpg`)} alt="" />
                <div className="hover-content">
                    <div className="line"></div>
                    <p>₹{item.cost}</p>
                    <h4>{item.name}</h4>
                </div>
            </a>
        </div>
    )
    )
  )
}

export default Productitem