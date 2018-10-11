import React, { Component } from 'react';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';

class AppFullPage extends Component {
  render() {
    return (
      <div className="d-flex w-100 h-100 mx-auto p-4 flex-column">
        <Header />
        <div 
          style={{
            paddingTop: '40px'
          }}>
        </div>
        <Hero />
        <Footer />
      </div>
    );
  }
}

export default AppFullPage;
