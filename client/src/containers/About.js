import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import NavLine from '../components/NavLine';
import Footer from '../components/Footer';

class About extends Component {
  render() {
    return (
      <div>
        <Navbar 
          style={{
            zIndex: '10',
            backgroundColor: 'transparent'
          }}/>
        <NavLine />
        <div style={{ marginLeft: '6px', marginRight: '6px' }}>
          <div 
            className="container text-left mb-8 pb-8"
            style={{
              maxWidth: '800px'
            }}>
            <h1 className="h1-editorial mb-4b">
              Simple, clean, concise  experiences that keep the user  coming back, time and time again.
            </h1>
            <div className="mb-4">
              <a 
                href="https://opensource.guide/how-to-contribute"
                className="btn btn-black btn-open-source ml-0">
                 Open Source <span role="img" aria-label="heart">❤️</span>
              </a>
            </div>
            <p>
              Guy Lepage is the Co-founder of <a href="http://universe.engineering" alt="Universe Labs" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">Universe&nbsp;Labs</a>, Founder of <a href="http://papriika.com" alt="Papriika" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">Papriika</a>, and a former <a href="https://www.ycombinator.com/companies/?batch=s2014" alt="Y Combinator" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">Y&nbsp;Combinator</a> 1st hire at <a href="http://blockstack.org" alt="Blockstack" target="_blank" rel="noopener noreferrer" className="bg-black text-light px-1">Blockstack&nbsp;PBC</a>, where he was the designer and 1 of 2 developers of the first Blockstack Browser. While at Blockstack he also assisted in the raising of over $50M in a token distribution from investors such as USV, Naval Ravikant, Winklevoss', etc.
            </p>
            <p>
              Guy is an international award-winning product UX/UI designer, art director and front-end developer with over 19 years of industry experience.
            </p>
            <br />
            <p>
              For more visit...
            </p>
            <div className="subscribe mr-auto">
              <a
                className="btn btn-black btn-block mx-auto mb-4"
                style={{
                  padding: '12px 65px'
                }}
                href="http://www.linkedin.com/in/guylepage/" 
                role="button"
                tabIndex="1">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
