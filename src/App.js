import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/home';
import { About } from './pages/about';
import { Header } from './components/header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container pt-4">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
