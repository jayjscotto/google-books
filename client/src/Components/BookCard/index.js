import React from 'react';
import Button from '../../Components/Button';
import './card.css';

const BookCard = (props) => {
  return (
    <li>
      <div className='card'>
        <div className='title-author'>
          <div className='results-card-title'>{props.title}</div>
          <h2 className='authors'>By: {props.author}</h2>
        </div>

        <div className='book-info'>
          <div className='bookImage'>
            <img src={props.image} alt='book-image' />
          </div>
          <div className='description'>{props.description}</div>
        </div>

        <div className='book-buttons'>
          <a href={props.link}>
            <Button value='Check Out This Book' />
          </a>
          <Button
            value='Save This Book'
            onClick={() => {
              console.log('add in the save book function');
            }}
          />
        </div>
      </div>
    </li>
  );
};

export default BookCard;
