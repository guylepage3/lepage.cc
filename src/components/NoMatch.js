import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class NoMatch extends Component {
  render() {
    return (
      <div className="d-flex w-100 h-100 mx-auto p-4 flex-column">
        <Header />
        <main 
          role="main" 
          className="
            Content 
            mb-auto 
            mt-auto
          ">        
          <div 
            className="
              mx-auto 
              text-center
              anima-slidein
            "
            style={{
              maxWidth: '685px'
            }}>
            <h1 
              className="
                text-white 
                font-weight-bold 
                font-italic 
                anima-fadein 
                hero-quote
              ">
              Ooops!
            </h1>
            <div className="lead text-white">
              <div className="anima-fadein anima-fadein-delay-1700">
                We can't seem to find the page you're looking for.
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default NoMatch;
