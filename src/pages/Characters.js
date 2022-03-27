import React, { useContext } from 'react';

import { CharCard } from '../components';
import { CharactersContext } from '../context';

const Characters = () => {
  const { characters } = useContext(CharactersContext);

  return (
    <div style={ { display: "flex", flexWrap: "wrap", gap: "10px" } }>
      {
        characters
          .map((char) => <CharCard key={ char.id } {...char} />)
      }
    </div>
  );
}

export default Characters;
