import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <main 
        role="main" 
        className="container my-auto mx-auto anima-slidein">
        <div className="row">
          <div className="col-lg-9 col-xl-7 mx-auto">
            <h1 
              className="
                text-white 
                font-weight-bold 
                font-italic 
                anima-fadein 
                mt-0
              ">
              Simple, clean, concise experiences that keep the user coming 
              back, time and time again.
            </h1>
            <p className="lead text-white-90 anima-fadein">
              I'm Guy Lepage, a Senior Product UX/UI Designer and Front-end 
              Developer with 19 years of industry experience, specializing in 
              designing and developing pixel perfect digital products, web 
              apps, mobile apps, websites, and more. My focus is on ensuring 
              that users have the best experiences without sacrificing code 
              quality.
            </p>
          </div>
        </div>
      </main>
    );
  }
}

export default Landing;
