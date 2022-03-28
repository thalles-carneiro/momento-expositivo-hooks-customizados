import React from 'react';

import { CharactersContext } from './';
import useFetch from '../hooks/useFetch';

const CHARACTERS_ENDPOINT = `https://rickandmortyapi.com/api/character`;

const CharactersProvider = ({ children }) => {
  const { error, isLoading, data } = useFetch(CHARACTERS_ENDPOINT);

  const charactersContext = {
    characters: data ? data.results : [],
    isLoading,
    error,
  };

  return (
    <CharactersContext.Provider value={ charactersContext }>
      { children }
    </CharactersContext.Provider>
  );
};

export default CharactersProvider;
