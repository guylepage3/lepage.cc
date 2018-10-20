import React, { Component } from 'react';

class Page404 extends Component {
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
              Ooops!
            </h1>
          </div>
          <div 
            className="
            container-fluid  
            lead 
            anima-fadein 
            text-white
          ">
            We can't seem to find the page you're looking for.
            <br />
            Error 404.
          </div>
        </div>
      </main>
    );
  }
}

export default Page404;
