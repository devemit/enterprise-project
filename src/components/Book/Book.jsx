import React from 'react';
import './Book.css';
const Book = ({ title, author, genre }) => {
  return (
    <div className='book-container'>
      <div className='book-content'>
        <img src='./classic.jpg' alt='book' className='book-content__image' />
        <div className='book-content__title'>{title}</div>
        <div className='book-content__author'>by {author}</div>
        <div className='book-content__genre'>{genre}</div>
      </div>
    </div>
  );
};

export default Book;
