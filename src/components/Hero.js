import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (
      <main 
        role="main" 
        className="mx-auto text-center mt-auto mb-auto anima-slidein"
        style={{
          maxWidth: '685px'
        }}>
        <h1 className="display-3 text-white font-weight-bold">
        </h1>
        <div className="lead text-white">
          <p>
            <span className="anima-fadein">
              <i>“Don’t try to be original. </i>
            </span>
            <span className="anima-fadein anima-fadein-delay-1700">
              <i>Just try to be good.” ~ Paul Rand</i>
            </span>
          </p>
        </div>
      </main>
    );
  }
}

export default Hero;
