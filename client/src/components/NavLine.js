import React, { Component } from 'react';
import styled from 'styled-components';

const Line = styled.div`
  display: none;

  @media (min-width: 768px) {
    position: absolute;
    display: block;
    height: 1px;
    width: 100%;
    z-index: 1;
  }

  @media (min-width: 992px) {
    position: absolute;
    display: block;
    height: 1px;
    width: 100%;
    left: 50%;
    margin-right: 0;
    margin-left: -480px;
  }
  
  @media (min-width: 1200px) {
    left: 50%;
    margin-right: 0;
    margin-left: -570px;
  }
`;

class NavLine extends Component {
  render() {
    return (
      <Line className="container line bg-black">
      </Line>
    );
  }
}

export default NavLine;
