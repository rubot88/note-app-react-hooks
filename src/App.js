import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/home';
import { About } from './pages/about';
import { Header } from './components/header';
import { Alert } from './components/alert';
import { AlertState } from './context/alert/alertState';
import { FirebaseState } from './context/firebase/firebaseState';

function App() {
  return (
    <AlertState>
      <FirebaseState>
        <BrowserRouter>
          <Header />
          <div className="container pt-4">
            <Switch>
              <Route path="/" exact
                render={() => (
                  <div>
                    <Alert />
                    <Home />
                  </div>)
                } />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </BrowserRouter>
      </FirebaseState>
    </AlertState>
  );
}

export default App;
