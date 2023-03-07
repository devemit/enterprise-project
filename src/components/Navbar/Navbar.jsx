import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import { BiBookHeart } from 'react-icons/bi';
import { useState } from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeMobileNav = () => {
    setNav(false);
  };

  return (
    <nav id='nav' className='navbar'>
      <div className='navbar__logo'>
        <BiBookHeart size={28} className='navbar__book-icon' />
        <span className='navbar__title'>Bright Ideas Bookstore</span>
      </div>
      <div onClick={handleNav} className='navbar_toggle-btn'>
        {nav ? <AiOutlineClose size={24} /> : <HiOutlineMenuAlt3 size={24} />}
      </div>
      <ul className={nav ? 'navbar__menu active' : 'navbar__menu'}>
        <li className='navbar__menu-item'>
          <Link
            onClick={closeMobileNav}
            to='nav'
            spy={true}
            smooth={true}
            offset={-10}
            duration={800}
          >
            Home
          </Link>
        </li>
        <li className='navbar__menu-item'>
          <Link
            onClick={closeMobileNav}
            to='about-us'
            spy={true}
            smooth={true}
            offset={10}
            duration={800}
          >
            About
          </Link>
        </li>
        <li className='navbar__menu-item'>
          <Link
            onClick={closeMobileNav}
            to='contact'
            spy={true}
            smooth={true}
            offset={50}
            duration={800}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
