import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NavbarSocial extends Component {
  render() {
    return this.props.socialItems.map((item) => (
      <li key={item.id} className="list-inline-item mx-2">
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
