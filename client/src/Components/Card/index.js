import React from 'react';
import './card.css';

const Card = props => {
  return (
    <div className='card'>
      <div className='card-body'>
        <h2 className='card-title'>{props.title}</h2>
        {props.content}
      </div>
    </div>
  );
};

export default Card;
