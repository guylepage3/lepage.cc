import React, { Component } from 'react';
import logoBug from './../img/guylepage-bug-white.svg';

class Footer extends Component {
  render() {
    return (
      <footer className="mx-auto text-center mb-2">
        <div className="container-fluid mx-auto mb-3 d-none d-md-block">
          <img src={logoBug}
            alt="Guy Lepage Logo Bug"
            width="55"
            style={{
              opacity: '0.2'
            }}
          />
        </div>
        <div className="mb-2 text-white-50 text-footer font-weight-bold">
          <a 
            href="https://github.com/guylepage3/" 
            alt="GitHub guylepage3 (Guy Lepage)"
            className="text-white">
            GitHub
          </a>
          &nbsp;&middot;&nbsp;
          <a 
            href="https://twitter.com/guylepage3" 
            alt="Twitter Guy Lepage (@guylepage3)"
            className="text-white">
            Twitter
          </a>
          &nbsp;&middot;&nbsp;
          <a 
            href="https://www.linkedin.com/in/guylepage/" 
            alt="Guy Lepage | LinkedIn"
            className="text-white">
            LinkedIn
          </a>
          &nbsp;&middot;&nbsp;
          <a 
            href="https://medium.com/@guylepage3" 
            alt="Guy Lepage – Medium"
            className="text-white">
            Medium
          </a>
        </div>
        <div className="text-footer text-white-50 font-weight-normal">
          &copy; 2018
        </div>
      </footer>
    );
  }
}

export default Footer;
