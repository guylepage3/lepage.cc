import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Landing from './Landing';

class Home extends Component {
  render() {
    return (
      <div className="d-flex w-100 h-100 mx-auto px-4 flex-column">
        <Header />
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
