import React, { Component } from 'react';
import logo from './../img/guylepage-logo-wordmark-white.svg';

class HeaderLight extends Component {
  render() {
    return (
      <nav className="navbar fixed-top" 
        style={{
          height: '56px',
          backgroundColor: '#000'
        }}>
        <a href="/" className="navbar-brand">
          <img 
            src={logo} 
            className="navbar-brand-img"
            alt="Guy Lepage"
          />
        </a>
      </nav>
    );
  }
}

export default HeaderLight;
