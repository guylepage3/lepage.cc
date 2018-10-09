import React, { Component } from 'react';
import logo from './../img/guylepage-logo-wordmark-white.svg';

class Header extends Component {
  render() {
    return (
      <nav className="navbar fixed-top"
        style={{
          height: '65px',
          backgroundColor: '#000'
        }} >
        <a className="navbar-brand font-weight-bold text-white"
          href="/"
          style={{
            lineHeight: '2.5rem',
            fontSize: '1.2rem'
          }}>
          <img src={logo} className="navbar-brand-img"
            alt="Guy Lepage"
          />
        </a>
      </nav>
    );
  }
}

export default Header;
