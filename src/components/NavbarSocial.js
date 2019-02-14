import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NavbarSocial extends Component {
  render() {
    return this.props.navbarSocialItems.map((item) => (
      <li className="list-inline-item mx-2">
        <a 
          href={item.href} 
          alt={item.alt}>
          <FontAwesomeIcon 
            className="mr-1" 
            icon={[`fab`, `${item.icon}`]}
            />
        </a>
      </li>
    ));
  }
}

export default NavbarSocial;
