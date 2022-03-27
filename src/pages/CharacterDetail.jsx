import React, { useContext, useEffect, useState } from 'react';

import { CharCard } from '../components';
import { CharactersContext } from '../context';

const fetchCharacter = async (id) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data = await response.json();
  return data;
}

const fetchEpisodes = async (episodesURLS) => {
  const episodesInPromises = episodesURLS.map(async (episodeURL) => {
    const response = await fetch(episodeURL);
    const { id, name, episode } = await response.json();
    return { id, name, episode };
  });
  const promisesFullfield = (await Promise.all(episodesInPromises));
  return promisesFullfield;
}

const CharacterDetail = ({ match: { params: { id } }}) => {
  const [character, setCharacter] = useState({});
  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    fetchCharacter(id)
      .then((character) => {
        setCharacter(character);
        fetchEpisodes(character.episode)
        .then((ep) =>setEpisodes(ep));
      });
  }, [id])
  const {name, status, image, species, origin} = character;
  console.log(episodes);
  return (
    <div style={ { display: "flex", flexDirection: "column", alignItems: "center"} }>
      <h2>Name: {name}</h2>
      <h3>Status: {status}</h3>
      <h3>specie: {species}</h3>
      <img style={ { width: "200px"}} src={image} alt={name} />
      <h3>Origin: {origin?.name}</h3>
      <h3>Episodes where {name} appears: </h3>
      <ul>
        {episodes.map((ep) =>
          (<li key={ep.id}>{`${ep.episode}: ${ep.name}`}</li>))}
      </ul>
    </div>
  );
}

export default CharacterDetail;
