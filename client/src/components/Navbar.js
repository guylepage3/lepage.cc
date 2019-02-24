import React, { Component } from 'react';
import styled from 'styled-components';
import Social from '../components/Social';
import SocialText from '../components/SocialText';
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

class Navbar extends Component {
  state = {
    socialItems: [
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
      <Nav className={`navbar navbar-expand-md ${this.props.colorScheme}`}
        style={this.props.style}
        >
        <div className="container">
          <ul className="navbar-nav d-none d-md-inline-flex">
            <Social 
              socialItems={this.state.socialItems} 
              />
          </ul>
          <a 
            href="/home"
            className="navbar-brand">
            <img 
              src={logo} 
              alt="Guy Lepage Logo"
              className="navbar-brand-img" 
              />
          </a>
          <NavbarToggler className="ml-auto navbar-toggler-dark"/>
          <div className="collapse navbar-collapse" id="navbarBasic">
            <div 
              className="
                container 
                d-flex 
                align-items-center 
                d-md-none"
              style={{ height: '47px' }}>
              <a 
                href="/home"
                className="navbar-brand">
                <img 
                  src={logo} 
                  alt="Guy Lepage Logo"
                  className="navbar-brand-img" 
                  />
              </a>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a 
                  href="/about"
                  className="nav-link">
                   About
                </a>
              </li>
              <li className="nav-item">
                <a 
                  href="/contact"
                  className="nav-link">
                   Contact
                </a>
              </li>
              <li className="nav-item d-md-none mb-4">
                <a 
                  href="/subscribe"
                  className="btn btn-sm btn-outline-black nav-button">
                   Subscribe
                </a>
              </li>
              <div className="nav-item d-md-none">
                <SocialText 
                  socialItems={this.state.socialItems}
                  className="text-black"
                  listAlign="d-block pt-3 pb-2 ml-0"
                />
              </div>
            </ul>
          </div>
        </div>
      </Nav>
    );
  }
}

export default Navbar;