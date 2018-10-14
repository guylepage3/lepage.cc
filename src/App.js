import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import HttpsRedirect from 'react-https-redirect';
import './styles/App.css';
import Intro from './components/Intro';
import Home from './components/Home';
import NoMatch from './components/NoMatch';

class App extends Component {
  render() {
    return (
      <div className="App">
      <HttpsRedirect>
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route path="/Home" component={Home} />
          {/* when none of the above match, <NoMatch> will be rendered */}
          <Route component={NoMatch} />
        </Switch>
      </HttpsRedirect>
      </div>
    );
  }
}

export default App;
