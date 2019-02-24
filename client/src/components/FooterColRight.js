import React, { Component } from 'react';

class FooterColRight extends Component {
  state = {
    data : [
      {
        "id": 1,
        "url": "/about",
        "text": "About",
        "alt": "About"
      },
      {
        "id": 2,
        "url": "/contact",
        "text": "Contact",
        "alt": "Contact"
      }
    ]
  }

      // {
      //   "id": 42,
      //   "url": "/",
      //   "text": "Awards",
      //   "alt": "Awards"
      // },
      // {
      //   "id": 43,
      //   "url": "/",
      //   "text": "Organizations",
      //   "alt": "Organizations"
      // },
      // {
      //   "id": 44,
      //   "url": "/",
      //   "text": "Case studies",
      //   "alt": "Case studies"
      // }
  
  render() {
    return this.state.data.map((item) => (
      <li key={item.id} className="text-white-20 mb-1">
        <a 
          href={item.url} 
          alt={item.alt}
          className={this.props.className}>
          {item.text}
        </a>
      </li>
    ));
  }
}

export default FooterColRight;
