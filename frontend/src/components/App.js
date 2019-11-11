import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import FortunePage from "./pages/FortunePage";
import Merchandise from "./pages/Merch";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import ContactConfirmation from "./pages/ConfirmContact";
import CustomNavbar from './navigation/CustomNavbar';


function App() {
  return (
    <Provider store={store}>
    <Router>
      <CustomNavbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/fortune" component={FortunePage} />
          <Route path="/about" component={About} />
          <Route path="/merch" component={Merchandise} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/confirmation" component={ContactConfirmation} />
          <Route component={ErrorPage} />
        </Switch>
    </Router>
  </Provider>
  );
}

export default App;
