import React, { Component } from 'react';

class Splash extends Component {
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
          <div 
            className="
              container-fluid
            ">
            <h1 
              className="
                text-white 
                font-weight-bold 
                font-italic 
                anima-fadein 
                quote
              ">
              "Less, but better."
            </h1>
          </div>
          <div 
            className="
            container-fluid 
            lead 
            anima-fadein 
            anima-fadein-delay-1700 
            text-white
          ">
            <i>~ Dieter Rams</i>
          </div>
        </div>
      </main>
    );
  }
}

export default Splash;
