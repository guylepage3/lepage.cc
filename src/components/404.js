import React, { Component } from 'react';

class 404 extends Component {
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
              We can't seem to find the page you're looking for.<br />
              Error 404.
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default 404;
