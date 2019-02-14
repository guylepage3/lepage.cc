import React, { Component } from 'react';
import styled from 'styled-components';
import NavbarSocial from '../components/NavbarSocial';
import NavbarToggler from '../components/NavbarToggler';
import logo from './../img/guylepage-logo-wordmark.svg';
import '../css/Navbar.css';

const Nav = styled.nav`
  padding-top: 0.15rem;
  padding-bottom: 0.15rem;
  background-color: #fff;

  @media (min-width: 768px) {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

const Div = styled.div`
  height: 43.5px;
`;

class Navbar extends Component {
  state = {
    navbarSocialItems: [
      {
        id: 1,
        href: 'https://github.com/guylepage3/',
        alt: 'GitHub guylepage3 (Guy Lepage)',
        icon: 'github',
        text: 'GitHub'
      },
      {
        id: 2,
        href: 'https://www.npmjs.com/~guylepage3',
        alt: 'npm guylepage3 (Guy Lepage)',
        icon: 'npm',
        text: 'npm'
      },
      {
        id: 3,
        href: 'https://twitter.com/guylepage3',
        alt: 'Twitter Guy Lepage (@guylepage3)',
        icon: 'twitter',
        text: 'Twitter'
      },
      {
        id: 4,
        href: 'https://www.linkedin.com/in/guylepage/',
        alt: 'Guy Lepage | LinkedIn',
        icon: 'linkedin',
        text: 'LinkedIn'
      },
      {
        id: 5,
        href: 'https://medium.com/@guylepage3',
        alt: 'Guy Lepage – Medium',
        icon: 'medium',
        text: 'Medium'
      }
    ]
  }

  render() {
    return (
      <Nav 
        className={`navbar navbar-expand-md ${this.props.colorScheme}`}
        style={this.props.style}>
        <div className="container">
          <ul className="navbar-nav d-none d-md-inline-flex">
            <NavbarSocial 
              navbarSocialItems={this.state.navbarSocialItems} 
            />
          </ul>
          <a className="navbar-brand" href="/">
            <img
              src={logo} 
              className="navbar-brand-img" 
              alt="Guy Lepage Logo"/>
          </a>
          <NavbarToggler className="ml-auto navbar-toggler-dark"/>
          <div className="collapse navbar-collapse" id="navbarBasic">
            <Div className="container d-flex align-items-center justify-content-center d-md-none">
              <a 
                className="navbar-brand d-flex align-items-center justify-content-center" 
                href="/"
                style={{
                  marginTop: '6px'
                }}>
                <img
                  src={logo} 
                  className="navbar-brand-img" 
                  alt="Guy Lepage Logo"/>
              </a>
            </Div>
            <ul className="navbar-nav">
              <li className="nav-item d-md-none">
                <a className="nav-link" href="/" >
                  Home
                </a>
              </li>
              {/*<li className="nav-item">
                <a className="nav-link" href="#" >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" >
                  Growth
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" >
                  About
                </a>
              </li>*/}
              <li className="nav-item">
                <a 
                  className="nav-link" 
                  href="https://goo.gl/forms/2LvYYCg1VViD6FWm2"
                  >
                  Contact
                </a>
              </li>
              <li className="nav-item d-md-none">
                <a 
                  className="btn btn-sm btn-outline-black nav-button" 
                  href="/subscribe"
                >
                  Subscribe
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Nav>
    );
  }
}

export default Navbar;
