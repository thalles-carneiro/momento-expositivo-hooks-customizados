const fetchCharacters = async () => {
  const CHARACTERS_ENDPOINT = `https://rickandmortyapi.com/api/character`;
  
  const response = await fetch(CHARACTERS_ENDPOINT);
  const data = await response.json();

  return data.results;
}

export default fetchCharacters;
