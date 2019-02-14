import React, { Component } from 'react';

class Splash extends Component {
  render() {
    return (
      <main 
        role="main" 
        className="container text-center mx-auto my-auto anima-fadein pl-4c pr-4c">
        <div className="row">
          <div 
            className="
              container-fluid
            ">
            <h2 
              className="
                text-white 
                font-weight-bold 
                font-italic 
                quote
                mt-0
                mb-2
              ">
              "Less, but better."
            </h2>
          </div>
          <div 
            className="
            container-fluid 
            lead 
            anima-fadein
            anima-fadein-delay-1700 
            text-white-90
            mt-0
          ">
            <i>~ Dieter Rams</i>
          </div>
        </div>
      </main>
    );
  }
}

export default Splash;
