import React from 'react';
import {FaUser} from "react-icons/fa";
import {FaShoppingBag} from "react-icons/fa";

export const Footer = () => {
   
  return (
    <div className='footer'>
     <div className='box-4'><a href='https://youtube.com'><FaShoppingBag className='icon-1'></FaShoppingBag></a></div>
     <div className='box-5'><a href='https://youtube.com'><FaUser className='icon-2'></FaUser></a></div>
    </div>
  )
}
export default Footer;