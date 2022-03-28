import React, { useContext, useState } from 'react';

import { CharCard } from '../components';
import { CharactersContext } from '../context';
import useLocalStorage from '../hooks/useLocalStorage';

const Characters = () => {
  const [name, setName] = useState('');
  const [value, setValue] = useLocalStorage('name', '');
  const { characters, isLoading } = useContext(CharactersContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue(name);
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          value={ name }
          onChange={ ({ target: { value } }) => setName(value) }
        />
        <button
          type="submit"
        >
          Save
        </button>
      </form>

      <h3>{ `Saved Value: ${value}` }</h3>

      <div style={ { display: "flex", flexWrap: "wrap", gap: "10px" } }>
        {
          characters
            .map((char) => <CharCard key={ char.id } {...char} />)
        }
      </div>
    </div>
  );
}

export default Characters;
