import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (
      <main 
        role="main" 
        className="mx-auto text-center content-hero mt-auto mb-auto"
        style={{
          maxWidth: '685px'
        }}>
        <h1 className="display-3 text-white font-weight-bold">
          Guy Lepage
        </h1>
        <div className="lead text-white-50">
          Welcome to the resume and portfolio for Guy Lepage.
        </div>
      </main>
    );
  }
}

export default Hero;
