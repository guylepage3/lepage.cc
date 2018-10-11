import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (
      <main 
        role="main" 
        className="
          mx-auto 
          text-center 
          mt-auto 
          mb-auto 
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
          "Less, but better."
        </h1>
        <div className="lead text-white">
          <div className="anima-fadein anima-fadein-delay-1700">
            <i>~ Dieter Rams</i>
          </div>
        </div>
      </main>
    );
  }
}

export default Hero;
