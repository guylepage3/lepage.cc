import React, { Component } from 'react';

class FooterColCenter extends Component {
  state = {
    data : [
      {
        "id": 4,
        "url": "/",
        "text": "Travelers",
        "alt": "Travelers"
      },
      {
        "id": 5,
        "url": "/",
        "text": "Hotels",
        "alt": "Hotels"
      }
    ]
  }
  
  render() {
    return this.state.data.map((item) => (
      <li key={item.id} className="text-white-50">
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
