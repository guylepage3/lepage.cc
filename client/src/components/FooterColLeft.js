import React, { Component } from 'react';

class FooterColLeft extends Component {
  state = {
    data : [
      {
        id: 1,
        url: "/",
        text: "New York",
        alt: "New York"
      },
      {
        id: 2,
        url: "/",
        text: "Paris",
        alt: "Paris"
      },
      {
        id: 3,
        url: "/",
        text: "London",
        alt: "London"
      },
      {
        id: 4,
        url: "/",
        text: "Los Angeles",
        alt: "Los Angeles"
      },
      {
        id: 5,
        url: "/",
        text: "Miami",
        alt: "Miami"
      },
      {
        id: 6,
        url: "/",
        text: "San Francisco",
        alt: "San Francisco"
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

export default FooterColLeft;
