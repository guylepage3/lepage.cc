import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import './styles/App.css';
import Intro from './components/Intro';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import PatternLib from './components/PatternLib';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route path="/Home" component={Home} />
          <Route path="/pattern-library" component={PatternLib} />
          {/* when none of the above match, <NoMatch> will be rendered */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
