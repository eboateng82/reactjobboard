import React, { Component } from 'react';

import { Provider } from 'react-redux';

import { HashRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Job from './components/Job';

import store from './store';


export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Route exact path='/' component={HomePage} />
            <Route path= '/job/:id' component={Job} />
            <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
