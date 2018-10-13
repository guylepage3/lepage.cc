import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Intro from './components/Intro';
import Home from './components/Home';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/Home" component={Home} />
        <Route exact path="/" component={Intro} />
      </Switch>
    );
  }
}

export default App;
