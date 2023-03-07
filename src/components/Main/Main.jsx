import React, { useState, useEffect } from 'react';
import './Main.css';
import Book from '../Book/Book';

const Main = () => {
  const [books, setBooks] = useState();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const fetchJson = () => {
    fetch('./books/listofbooks.json')
      .then((response) => {
        return response.json();
      })
      .then((books) => {
        setBooks(books);
        setResults(books);
      });
  };
  useEffect(() => {
    fetchJson();
  }, []);

  // Sorted books alphabetically by author name
  const sortedBooks = books?.sort((a, b) => {
    if (a.author < b.author) {
      return -1;
    }
  });

  // Handle search query function
  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };
  const handleFilterClick = () => {
    const filteredResults = sortedBooks.filter((item) => {
      if (query === '') {
        return item;
      } else if (item.author.toLowerCase().includes(query.toLowerCase())) {
        return item;
      } else if (item.title.toLowerCase().includes(query.toLowerCase())) {
        return item;
      } else if (item.genre.toLowerCase().includes(query.toLowerCase())) {
        return item;
      }
    });
    setResults(filteredResults);
  };

  // Reset filters function
  const resetFilters = () => {
    setQuery('');
    setResults(sortedBooks);
  };

  return (
    <>
      {/* I am using ID's for to scroll to sections */}
      <div id='hero_section' className='main-section__container'>
        <div className='main-section__content-wrapper'>
          <div className='main-section__content-wrapper__title'>
            Our collection of books
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className='main-section__search-form'
          >
            <input
              value={query}
              onChange={handleQueryChange}
              className='main-section__search-input'
              type='name'
              placeholder='Search by title,author,genre...'
            />
            <button
              type='submit'
              onClick={handleFilterClick}
              className='main-section__search-input__submit-btn'
            >
              Search
            </button>
            <button
              onClick={resetFilters}
              type='reset'
              className='main-section__search-input__clear-btn'
            >
              Clear
            </button>
          </form>

          <div className='main-section__grid-container'>
            {results?.map((book) => (
              <div key={book.title}>
                <Book title={book.title} author={book.author} genre={book.genre} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
