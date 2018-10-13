import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
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
            Simple, clean, concise experiences that keep the user coming back, 
            time and time again.
          </h1>
          <div className="lead text-white">
            <div className="anima-fadein">
              I'm Guy Lepage, a Senior Product UX/UI Designer and Front-End 
              Developer with 20 years of industry experience, specializing in 
              designing and developing pixel perfect digital products, web 
              apps, websites, etc. quickly without sacrificing code quality 
              and ensuring that users have the best experience.
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Landing;
