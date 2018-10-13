import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import NotFound from './NotFound';

class NoMatch extends Component {
  render() {
    return (
      <div className="d-flex w-100 h-100 mx-auto p-4 flex-column">
        <Header />
        <div 
          style={{
            paddingTop: '40px'
          }}>
        </div>
        <NotFound />
        <Footer />
      </div>
    );
  }
}

export default NoMatch;
