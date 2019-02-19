import React, { Component } from 'react';
import styled from 'styled-components';
import Background from './../img/portfolio-clppr-hero-iphone.png';

const Overlay = styled.div`
  background: url(${Background}), linear-gradient(
    rgba(255,255,255,1), 
    rgba(202,220,228,1)
  );
  background-size: 180%, cover;
  background-position-x: center;
  background-position-y: center, center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;

  @media (min-width: 768px) {
    background: url(${Background}), linear-gradient(
      rgba(255,255,255,1), 
      rgba(202,220,228,1)
    );
    background-size: 900px, cover;
    background-position-x: center;
    background-position-y: 150px, center;
    background-repeat: no-repeat;
    width: 100%;
    height: 865px;
  }
`;

class Header extends Component {
  render() {
    return (
      <div className="container-fluid pl-0 pr-0 hero">
        <div className="row no-gutters">
          <Overlay 
            className="
              container-fluid 
              d-flex 
              align-items-center 
              justify-content-center 
              text-white 
              p-4 fadein">
            <div className="container"
              style={{
                maxWidth: '900px',
                backgroundColor: '#fff'
              }}>
            </div>
          </Overlay>
        </div>
      </div>
    );
  }
}

export default Header;
