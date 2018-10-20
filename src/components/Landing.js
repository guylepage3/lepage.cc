import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <main 
        role="main" 
        className="
          container 
          mb-auto 
          mt-auto 
          mx-auto 
          anima-slidein
        ">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <h1 
              className="
                text-white 
                font-weight-bold 
                font-italic 
                anima-fadein 
                hero-quote
              ">
              Simple, clean, concise experiences that keep the user coming back, 
              time and time again.
            </h1>
            <div className="lead text-white">
              <div className="anima-fadein">
                I'm Guy Lepage, a Senior Product UX/UI Designer and Front-end 
                Developer with 19 years of industry experience, specializing 
                in designing and developing pixel perfect digital products, 
                web apps, mobile apps, websites, and more. My focus is on 
                ensuring that users have the best experiences without 
                sacrificing code quality.
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Landing;
