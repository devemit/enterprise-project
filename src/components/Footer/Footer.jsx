import React from 'react';
import './Footer.css';
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer id='contact' className='footer'>
      <div className='footer__left'>
        <h3>
          Company<span>logo</span>
        </h3>
        <p className='footer__company__name'>Brigth Ideas Bookstore © 2015</p>
        <div className='footer__icons'>
          <AiFillFacebook size={28} className='footer__icons-icon' />
          <AiFillInstagram size={28} className='footer__icons-icon' />
          <AiFillTwitterCircle size={28} className='footer__icons-icon' />
        </div>
      </div>
      <div className='footer__right'>
        <p>Contact Us</p>
        <form action='#' method='post'>
          <input type='text' name='email' placeholder='Email' />
          <textarea name='message' placeholder='Message'></textarea>
          <button>Send</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
