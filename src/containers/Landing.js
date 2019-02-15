import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div className="container my-auto mx-auto anima-fadein pl-4c pr-4c pb-9 mb-8">
        <div className="row">
          <div className="col-lg-9 col-xl-7 mx-auto py-5">
            <h2 className="text-white font-weight-bold font-italic mt-0">
              Simple, clean, concise experiences that keep the user coming 
              back, time and time again.
            </h2>
            <p className="text-white-90">
              I'm Guy Lepage, an internationally award winning senior product, 
              UX/UI designer and front-end developer. I have 4 years 
              blockchain product design experience and 19 years total industry 
              experience.
            </p>
            <p className="text-white-90">
              My focus is designing and building user experiences and 
              interfaces that are effective for their users.
            </p>
            <ul className="text-white-90">
              <li>Blockchain products.</li>
              <li>Decentralized desktop and mobile apps.</li>
              <li>Mobile apps.</li>
              <li>Web apps.</li>
              <li>Animation.</li>
              <li>CAD.</li>
              <li>and more...</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
