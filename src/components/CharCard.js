import React from 'react';
import { useHistory } from 'react-router-dom';

const CharCard = ({ name, status, species, gender, image, id }) => {
  let history = useHistory();
  return (
    <div>
      <img src={ image } alt={ name } onClick={ () => history.push(`/${id}`)}/>
      <p>{ `Name: ${name}` }</p>
      <p>{ `Status: ${status}` }</p>
      <p>{ `Species: ${species}` }</p>
      <p>{ `Gender: ${gender}` }</p>
    </div>
  );
}

export default CharCard;
