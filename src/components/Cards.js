import React from 'react';
import SingleCard from './SingleCard';
import { v4 as uuidv4 } from 'uuid';

const Cards = ({ movie }) => {
  return (
    <>
      {movie.map((item) => (
        <SingleCard key={uuidv4()} item={item} />
      ))}
    </>
  );
};

export default Cards;
