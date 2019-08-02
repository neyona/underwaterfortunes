import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './pages/Home';
import Fortune from './pages/Fortune';
import About from './pages/About';
import Merchandise from './pages/Merch';
import ErrorNotFound from './pages/ErrorNotFound';

import { NavigationBar } from './components/NavigationBar';
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/fortune" component={Fortune} />
          <Route path="/about" component={About} />
          <Route path="/merch" component={Merchandise} />
          <Route component={ErrorNotFound} />
        </Switch>
    </Router>
  </Provider>
  );
}

export default App;
