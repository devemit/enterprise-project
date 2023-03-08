import React from 'react';
import './Book.css';

const Book = ({ title, author, genre }) => {
  // destruct props
  return (
    <div className='book__container'>
      <div className='book__content'>
        <img src='./classic.jpg' alt='cover_image' className='book__image' />
        <div className='book__title'>{title}</div>
        <div className='book__author'>by {author}</div>
        <div className='book__genre'>{genre}</div>
      </div>
    </div>
  );
};

export default Book;
