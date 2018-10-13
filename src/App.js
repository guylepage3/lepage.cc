import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Intro from './components/Intro';
import Home from './components/Home';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route path="/Home" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
