import React, { Component } from 'react';

class FooterColCenter extends Component {
  state = {
    data : [
      {
        "id": 30,
        "url": "/",
        "text": "Portfolio",
        "alt": "Portfolio"
      },
      {
        "id": 31,
        "url": "/",
        "text": "Growth",
        "alt": "Growth"
      },
      {
        "id": 32,
        "url": "/",
        "text": "Resume",
        "alt": "Resume"
      },
      {
        "id": 33,
        "url": "/",
        "text": "Skills",
        "alt": "Skills"
      },
      {
        "id": 34,
        "url": "/",
        "text": "Experience",
        "alt": "Experience"
      }     
    ]
  }
  
  render() {
    return this.state.data.map((item) => (
      <li key={item.id} className="text-white-20 mb-1">
        {/* <a 
          href={item.url} 
          alt={item.alt}
          className={this.props.className}>
        */}
          {item.text}
        {/*</a>*/}
      </li>
    ));
  }
}

export default FooterColCenter;
