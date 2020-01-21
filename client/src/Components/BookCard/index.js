import React from 'react';
import './card.css';

const BookCard = ({ children }) => {
  return (
    <li>
      <div className='card'>
        <div className='results-card-body'>{children}</div>
      </div>
    </li>
  );
};

export default BookCard;
