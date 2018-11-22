import React, { Component } from 'react';
import CopyrightUpdate from 'copyright-update';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends Component {
  render() {
    return (
      <footer className="container-fluid mx-auto text-center mb-4">
        <div className="text-white-50 text-footer font-weight-bold">
          <ul className="list-inline my-2">
            <li className="list-inline-item mx-2">
              <a href="https://github.com/guylepage3/" 
                alt="GitHub guylepage3 (Guy Lepage)"
                className="text-white">
                <FontAwesomeIcon className="mr-1" icon={['fab', 'github']} /> GitHub
              </a>
            </li>
            <li className="list-inline-item mx-2">
              <a href="https://twitter.com/guylepage3" 
                alt="Twitter Guy Lepage (@guylepage3)"
                className="text-white">
                <FontAwesomeIcon className="mr-1" icon={['fab', 'twitter']} /> Twitter
              </a>
            </li>
            <li className="list-inline-item mx-2">
              <a href="https://www.linkedin.com/in/guylepage/" 
                alt="Guy Lepage | LinkedIn"
                className="text-white">
                <FontAwesomeIcon className="mr-1" icon={['fab', 'linkedin']} /> LinkedIn
              </a>
            </li>
            <li className="list-inline-item mx-2">
              <a href="https://medium.com/@guylepage3" 
                alt="Guy Lepage – Medium"
                className="text-white">
                <FontAwesomeIcon className="mr-1" icon={['fab', 'medium']} /> Medium
              </a>
            </li>
          </ul>
        </div>
        <div className="text-footer text-white-50 font-weight-normal">
          <a 
            href="https://goo.gl/forms/2LvYYCg1VViD6FWm2" 
            alt="Contact Guy"
            className="text-white font-weight-bold">
            Contact
          </a>
          <CopyrightUpdate />
          &nbsp;&nbsp;&copy; 2018
        </div>
      </footer>
    );
  }
}

export default Footer;
