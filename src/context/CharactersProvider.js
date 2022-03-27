import React, { useState, useEffect } from 'react';

import { CharactersContext } from './';
import fetchCharacters from '../services/fetchCharacters';

const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    (async () => {
      setCharacters(await fetchCharacters());
    })();
  }, []);

  const charactersContext = {
    characters,
  };

  return (
    <CharactersContext.Provider value={ charactersContext }>
      { children }
    </CharactersContext.Provider>
  );
};

export default CharactersProvider;
