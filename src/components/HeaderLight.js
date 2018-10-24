import React, { Component } from 'react';
import logo from './../img/guylepage-logo-wordmark-white.svg';

class HeaderLight extends Component {
  render() {
    return (
      <nav 
        className="
          navbar 
          fixed-top
        "
        style={{
          height: '56px',
          backgroundColor: '#000'
        }}>
        <a 
          className="
            navbar-brand 
            font-weight-bold 
            text-white
          "
          href="/"
          style={{
            fontSize: '1.2rem'
          }}>
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
