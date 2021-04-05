import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import { Header, Home, Player } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/player' component={Player} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
