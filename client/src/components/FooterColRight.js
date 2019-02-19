import React, { Component } from 'react';

class FooterColRight extends Component {
  state = {
    data : [
      {
        "id": 7,
        "url": "mailto:support@papriika.com?subject=Mail from Papriika.com",
        "text": "Contact",
        "alt": "Contact"
      }
    ]
  }
  
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
