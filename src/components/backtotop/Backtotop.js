import React from 'react';
import { useEffect, useState } from 'react';
import './Backtotop.css';

const Backtotop = () => {

  const [bttbtn, setBttbtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100 ){
        setBttbtn(true)
      } else {
        setBttbtn(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }

  return (
    <div className="bttMainWrapper">
    {bttbtn && (
      <button onClick={scrollUp} id='myBtn'>Top</button>
    )}
    </div>
  )
}

export default Backtotop