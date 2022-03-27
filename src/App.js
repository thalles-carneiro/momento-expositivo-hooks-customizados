import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Characters } from './pages';
import { CharactersProvider } from './context';

const App = () => (
  <CharactersProvider>
    <BrowserRouter>
      <Route path="/" component={ Characters } />
    </BrowserRouter>
  </CharactersProvider>
);

export default App;
