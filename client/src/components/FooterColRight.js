import React, { Component } from 'react';

class FooterColRight extends Component {
  state = {
    data : [
      {
        "id": 40,
        "url": "/",
        "text": "About",
        "alt": "About"
      },
      {
        "id": 41,
        "url": "mailto:guylepage3@gmail.com?subject=Mail from website",
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
      <li key={item.id} className="text-white-50">
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
