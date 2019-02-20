import React, { Component } from 'react';
import Intro from './containers/Intro';
import Home from './containers/Home';
import NoMatch from './containers/NoMatch';
import PatternLib from './containers/PatternLib';
import Subscribe from './containers/Subscribe';
import SubscribeError from './containers/SubscribeError';
import SubscribeSuccess from './containers/SubscribeSuccess';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.connecToServer = this.connecToServer.bind(this);
  }
  connecToServer() {
    fetch('/');
  }
  componentDidMount() {
    this.connecToServer();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Intro} />
            <Route path="/Home" component={Home} />
            <Route path="/pattern-library" component={PatternLib} />
            <Route path="/subscribe" component={Subscribe} />
            <Route path="/subscribe-error" component={SubscribeError} />
            <Route path="/subscribe-success" component={SubscribeSuccess} />
            {/* when none of the above match, <NoMatch> will be rendered */}
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;