import React from 'react';
import './results.css';

const Results = ({ children }) => {
  return <ul className='result-list'> {children} </ul>;
};

export default Results;
