import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <main 
        role="main" 
        className="container my-auto mx-auto anima-slidein">
        <div className="row">
          <div className="col-lg-9 col-xl-7 mx-auto py-5">
            <h2 
              className="
                text-white 
                font-weight-bold 
                font-italic 
                anima-fadein 
                mt-0
              ">
              Simple, clean, concise experiences that keep the user coming 
              back, time and time again.
            </h2>
            <p className="text-white-90 anima-fadein">
              I'm Guy Lepage, a senior blockchain and web3 product, UX/UI 
              designer and front-end developer. I have 4 years blockchain 
              product design experience and 19 years total industry experience.
            </p>
            <p className="text-white-90 anima-fadein">
              My focus is designing and building user experiences and 
              interfaces that are effective for their users. 
              <ul>
                <li>Blockchain products.</li>
                <li>Decentralized desktop and mobile apps.</li>
                <li>Mobile apps.</li>
                <li>Websites</li>
                <li>Animation</li>
                <li>CAD</li>
                <li>and more...</li>
              </ul>
            </p>
          </div>
        </div>
      </main>
    );
  }
}

export default Landing;
