import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Characters } from './pages';
import CharacterDetail from './pages/CharacterDetail';
import { CharactersProvider } from './context';

const App = () => (
  <CharactersProvider>
    <BrowserRouter>
    <Switch>
      <Route path="/:id" render={ (props) => <CharacterDetail {...props} /> } />
      <Route path="/" component={ Characters } />
    </Switch>
    </BrowserRouter>
  </CharactersProvider>
);

export default App;
