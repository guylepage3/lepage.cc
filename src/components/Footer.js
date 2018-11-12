import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends Component {
  render() {
    return (
      <footer className="container-fluid mx-auto text-center mb-2">
        <div className="mb-2 text-white-50 text-footer font-weight-bold">
          <a 
            href="https://github.com/guylepage3/" 
            alt="GitHub guylepage3 (Guy Lepage)"
            className="text-white">
            <FontAwesomeIcon icon={['fab', 'github']} /> GitHub
          </a>
          &nbsp;&middot;&nbsp;
          <a 
            href="https://twitter.com/guylepage3" 
            alt="Twitter Guy Lepage (@guylepage3)"
            className="text-white">
            <FontAwesomeIcon icon={['fab', 'twitter']} /> Twitter
          </a>
          &nbsp;&middot;&nbsp;
          <a 
            href="https://www.linkedin.com/in/guylepage/" 
            alt="Guy Lepage | LinkedIn"
            className="text-white">
            <FontAwesomeIcon icon={['fab', 'linkedin']} /> LinkedIn
          </a>
          &nbsp;&middot;&nbsp;
          <a 
            href="https://medium.com/@guylepage3" 
            alt="Guy Lepage – Medium"
            className="text-white">
            <FontAwesomeIcon icon={['fab', 'medium']} /> Medium
          </a>
        </div>
        <div className="text-footer text-white-50 font-weight-normal">
          <a 
            href="https://goo.gl/forms/2LvYYCg1VViD6FWm2" 
            alt="Contact Guy"
            className="text-white font-weight-bold">
            Contact
          </a>
          &nbsp;&nbsp;&copy; 2018
        </div>
      </footer>
    );
  }
}

export default Footer;
