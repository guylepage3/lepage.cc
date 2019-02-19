import React, { Component } from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Background from './../img/portfolio-clppr-hero-iphone.png';

const Overlay = styled.div`
  background: url(${Background}), linear-gradient(
    rgba(255,255,255,1), 
    rgba(202,220,228,1)
  );
  background-size: 600px, cover;
  background-position-x: center;
  background-position-y: 65px, center;
  background-repeat: no-repeat;
  width: 100%;
  height: 635px;

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
    height: 878px;
  }
`;

const Description = styled.p`
  margin-left: -15px;
  position: absolute;
  bottom: 0;
  margin-bottom: 28px;

  @media (min-width: 576px) {
    margin-bottom: 48px;
  }

  @media (min-width: 768px) {
    margin-bottom: 56px;
    font-size: 90%;
  }

  @media (min-width: 992px) {
    margin-bottom: 80px;
  }
`;

class Header extends Component {

  componentDidMount = () => {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  }

  render() {
    return (
      <div 
        className="container-fluid pl-0 pr-0 hero" 
        style={{ 
          marginTop: '-53px' 
        }}>
        <div className="row no-gutters">
          <Overlay 
            className="
              container-fluid 
              p-4 
              fadein"
            style={{
              position: 'relative'
            }}>
            <div className="container">
              <Description 
                className="font-weight-bold">
                <button 
                  className="mr-1" 
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '2px'
                  }}
                  data-toggle="tooltip" 
                  data-placement="top" 
                  title="Social news sharing platform, Co-founder, product, UX/UI designer"
                  >
                  <FontAwesomeIcon icon="info-circle" />
                </button>
                  Clppr iOS & Android App
              </Description>
            </div>
          </Overlay>
        </div>
      </div>
    );
  }
}

export default Header;
