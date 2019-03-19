import React, { Component } from 'react';
import styled from 'styled-components';
import CopyrightUpdate from 'copyright-update';
import SubscribeForm from '../components/SubscribeForm';
import logo from './../img/guylepage-logo-wordmark.svg';
import '../css/Subscribe.css';

const Div = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left!important;
  }
`;

const Img = styled.img`
  width: 110px;
  margin-left: -8px;

  @media (min-width: 768px) {
    width: 150px;
  }
`;

// Using a ES6 class component as it contains state.
class Subscribe extends Component {
  render() {
    return (
      <div className="container-fluid pl-0 pr-0">
        <div 
          className="
            container-fluid 
            d-flex 
            align-items-center 
            justify-content-center
            pl-0 pr-0
          ">
          <div className="card col-md-8">
            <div className="card-body">
              <Div className="text-center mb-4">
                <a 
                  href="/home">
                  <Img 
                    src={logo} 
                    alt="Guy Lepage Logo"
                    className="mb-4c"
                    />
                </a>
                {/*<p className="lead font-weight-bold">
                  Subscribe to
                </p>*/}
                <p className="lead font-weight-bold">
                  Subscribe to receive weekly project updates.
                </p>
                <p className="mb-4c">
                  Get weekly updates on project progress, thoughts, insights news, conversations and more...
                </p>
              </Div>
              <SubscribeForm 
                className="subscribe-form"
                />
              <a
                className="btn btn-link btn-subscribe btn-block mx-auto"
                style={{
                  maxWidth: '280px',
                  marginTop: '16px'
                }}
                href="/home" 
                role="button">
                Back to home
              </a>
              <div className="text-center small letter-space mt-9 mb-4">
                <CopyrightUpdate 
                  style={{
                    display: 'inline-block'
                  }}
                />
                &nbsp;Guy Lepage.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Subscribe;
