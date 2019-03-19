import React, { Component } from 'react';
import CopyrightUpdate from 'copyright-update';
import FooterColCenter from './FooterColCenter';
import FooterColRight from './FooterColRight';
import Social from './Social';
import logo from './../img/guylepage-logo-wordmark-white.svg';
import '../css/Footer.css';

class Footer extends Component {
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
      <footer 
        className={`container-fluid ${this.props.className}`}
        style={{backgroundColor: '#000'}}>
        <div className="container pt-6 pb-6">
          <div className="mb-4b">
            <a href="/">
              <img
                src={logo} 
                className="navbar-brand-img" 
                alt="Universe Logo"
                style={{
                  marginLeft: '-3px',
                  width: '125px'
                }}/>
            </a>
          </div>
          <div>
            <div className="row">
              <div className="col-sm-6 col-md-3 mb-4 ml-auto">
                <ul className="list-unstyled my-2">
                  <li className="d-block text-white mb-3">Experience</li>
                  <FooterColCenter className="text-white" />
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 mb-3">
                <ul className="list-unstyled my-2">
                  <li className="d-block text-white mb-3">Other</li>
                  <FooterColRight className="text-white" />
                </ul>
              </div>
            </div>
          </div>
          <div className="text-white-50 mb-4">
            <div className="row d-flex align-items-end">
              <ul className="inline-list"
                style={{
                  paddingRight: '2px',
                  paddingLeft: '8px'
                }}>
                <Social 
                  socialItems={this.state.socialItems}
                  className="text-white"
                  listAlign="list-inline-item"
                />
              </ul>
              <div className="subscribe ml-auto pl-3 pr-3">
                <p className="text-white small-font-size-90 mt-4">
                  Subscribe to my newsletter.
                </p>
                <a
                  className="btn btn-light btn-block mx-auto mb-4"
                  style={{
                    fontSize: '13px',
                    fontWeight: '700',
                    letterSpacing: '.03em',
                    textTransform: 'uppercase',
                    padding: '12px 45px'
                  }}
                  href="/subscribe" 
                  role="button">
                  Subscribe
                </a>
              </div>
            </div>
          </div>
          <div className="container line bg-white mb-4c"></div>
          <div className="mb-4">
            <a 
              href="https://opensource.guide/how-to-contribute"
              className="btn btn-white btn-open-source ml-0">
               Open Source <span role="img" aria-label="heart">❤️</span>
            </a>
          </div>
          <div className="small text-white-50 letter-space mb-2">
            <CopyrightUpdate 
              style={{
                display: 'inline-block'
              }}
            />
            &nbsp;Guy Lepage.
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
