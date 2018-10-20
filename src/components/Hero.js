import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (
      <main 
        role="main" 
        className="
          container
          mx-auto 
          text-center 
          mt-auto 
          mb-auto 
          anima-slidein
        ">
        <div className="row">
          <div className="container-fluid">
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
          </div>
          <div className="container-fluid lead text-white">
            <div className="anima-fadein anima-fadein-delay-1700">
              <i>~ Dieter Rams</i>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Hero;
