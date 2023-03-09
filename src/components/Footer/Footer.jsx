import React from 'react';
import './Footer.css';
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    // I am using ID's to scroll to sections
    <footer id='footer-scroll' className='footer'>
      <div className='footer__left'>
        <h3 className='footer__left__title'>
          Company<span className='footer__left__title-span'>logo</span>
        </h3>
        <p className='footer__left__company-name'>Brigth Ideas Bookstore © 2015</p>
        <div className='footer__left__icons'>
          <AiFillFacebook size={28} className='footer__left__icons-icon' />
          <AiFillInstagram size={28} className='footer__left__icons-icon' />
          <AiFillTwitterCircle size={28} className='footer__left__icons-icon' />
        </div>
      </div>
      <div className='footer__right'>
        <p className='footer__right__text'>Contact Us</p>
        <form className='footer__right__form' action='#' method='post'>
          <input type='text' name='email' placeholder='Email' />
          <textarea name='message' placeholder='Message'></textarea>
          <button className='footer__right__submit-btn'>Send</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
