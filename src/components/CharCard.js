import React from 'react';

const CharCard = ({ name, status, species, gender, image }) => {
  return (
    <div>
      <img src={ image } alt={ name } />
      <p>{ `Name: ${name}` }</p>
      <p>{ `Status: ${status}` }</p>
      <p>{ `Species: ${species}` }</p>
      <p>{ `Gender: ${gender}` }</p>
    </div>
  );
}

export default CharCard;
