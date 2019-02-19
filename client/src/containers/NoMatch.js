import React, { Component } from 'react';
import Footer from '../components/Footer';
import Page404 from './Page404';

class NoMatch extends Component {
  render() {
    return (
      <div className="d-flex w-100 h-100 mx-auto flex-column">
        <div 
          style={{
            paddingTop: '56px'
          }}>
        </div>
        <Page404 />
        <Footer />
      </div>
    );
  }
}

export default NoMatch;
