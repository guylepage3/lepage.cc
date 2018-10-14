import React, { Component } from 'react';
import HttpsRedirect from 'react-https-redirect';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';

class Home extends Component {
  render() {
    return (
      <HttpsRedirect>
      <div className="d-flex w-100 h-100 mx-auto p-4 flex-column">
        <Header />
        <div 
          style={{
            paddingTop: '40px'
          }}>
        </div>
        <Landing />
        <Footer />
      </div>
      </HttpsRedirect>
    );
  }
}

export default Home;
