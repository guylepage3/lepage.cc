import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Landing from './Landing';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
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
