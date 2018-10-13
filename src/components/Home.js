import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
      <div className="d-flex w-100 h-100 mx-auto p-4 flex-column">
        <Header />
        <div 
          style={{
            paddingTop: '40px'
          }}>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
