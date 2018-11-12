import React, { Component } from 'react';
import HeaderLight from './HeaderLight';
import Footer from './Footer';
import Landing from './Landing';

class Home extends Component {
  render() {
    return (
      <div className="d-flex w-100 h-100 mx-auto px-4 flex-column">
        <HeaderLight />
        <div 
          style={{
            paddingTop: '32px'
          }}>
        </div>
        <Landing />
        <Footer />
      </div>
    );
  }
}

export default Home;
