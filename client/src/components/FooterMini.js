import React, { Component } from 'react';
import styled from 'styled-components';
import CopyrightUpdate from 'copyright-update';
import Social from './Social';

const Div = styled.div`
  padding-bottom: 0;

  @media (min-width: 768px) {
    padding-bottom: 0.5rem;
  }
`;

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
      <footer className="container-fluid mx-auto text-center pt-4 pb-4"> {/**/}
        <Div className="text-white-50 text-footer font-weight-bold">
          <ul className="list-inline my-2">
            <Social 
              socialItems={this.state.socialItems}
              className="text-white"
              listAlign="list-inline-item"
            />
          </ul>
        </Div>
        <div className="text-footer text-white-50 font-weight-normal">
          <CopyrightUpdate
            style={{
              display: 'inline-block',
            }}
          />
          &nbsp;Guy Lepage.
        </div>
      </footer>
    );
  }
}

export default Footer;
