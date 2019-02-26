import React, { Component } from 'react';
import styled from 'styled-components';
import CopyrightUpdate from 'copyright-update';
import SubscribeForm from '../components/SubscribeForm';
import '../css/Subscribe.css';

const Div = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
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
                <p className="lead font-weight-bold">
                  Subscribe to my newsletter
                </p>
                <h3 className="">
                  A Creative's Lens
                </h3>
                <p>
                  A Creative's Lens is a weekly newsletter update from a creative entrepreneur. Updates, on weekly progress, conversations, thoughts, news, insights and more...
                </p>
              </Div>
              <SubscribeForm />
              <a
                className="btn btn-link btn-subscribe btn-block mx-auto"
                style={{
                  textDecoration: 'none',
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
