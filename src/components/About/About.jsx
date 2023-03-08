import React from 'react';
import './About.css';

const About = () => {
  return (
    // I am using ID's to scroll to sections
    <div id='about-us-scroll' className='about-us__container'>
      <hr />
      <div className='about-us__title'>
        More than <span className='about-us__title-span'>$25 million</span> raised for
        local bookstores.
      </div>
      <hr />
      <div className='about-us__sub-title'>
        'Thanks to bookshop there is no reason buying on Amazon anymore.'
      </div>
      <div className='about-us__content'>
        <img src='./aboutus.png' alt='img' className='about-us__book-image' />
        <div className='about-us__content__text-wrapper'>
          <p className='about-us__content__text-one'>
            <span className='about-us__content__text-one-bold'>
              Our bookstore works to connect readers with independent booksellers all over
              the world.
            </span>
            ‍We believe local bookstores are essential community hubs that foster culture,
            curiosity, and a love of reading, and we're committed to helping them thrive.
          </p>
          <p className='about-us__content__text-two'>
            <span className='about-us__content__text-two-bold'>
              Every purchase on the site financially supports independent bookstores.
            </span>
            Our platform gives independent bookstores tools to compete online and
            financial support to help them maintain their presence in local communities.
          </p>
          <p className='about-us__content__text-three'>
            Since 2020, we've raised more than
            <span className='about-us__content__text-three-bold'> $24 million</span> for
            independent bookstores.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
