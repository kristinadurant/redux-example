import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header, Home, Player } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/player' component={Player} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
