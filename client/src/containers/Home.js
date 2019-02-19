import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

class Home extends Component {
  render() {
    return (
      <div style={{
        backgroundColor: '#000',
        height: '100vh'
        }}>
        <div style={{ backgroundColor: '#000' }}>
          <Navbar />
          <div 
            style={{
              paddingTop: '32px'
            }}>
          </div>
          <Hero />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
