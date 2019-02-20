import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import NavLine from '../components/NavLine';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar 
          style={{
            zIndex: '10',
            backgroundColor: 'transparent'
        }}/>
        <NavLine />
        <Hero />
        <Footer />
      </div>
    );
  }
}

export default Home;
