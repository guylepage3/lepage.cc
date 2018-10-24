import React, { Component } from 'react';
import HeaderLight from './HeaderLight';
import Splash from './Splash';
import Footer from './Footer';

class Intro extends Component {
  componentDidMount() {
    const { history } = this.props;
    setTimeout(() => {
      history.push('/home')
    }, 5000);
  }
  componentWillUnmount() {
    clearTimeout(this.redirectTimeout);
  }
  render() {
    return (
      <div className="d-flex w-100 h-100 mx-auto p-4 flex-column">
        <HeaderLight />
        <div 
          style={{
            paddingTop: '32px'
          }}>
        </div>
        <Splash />
        <Footer />
      </div>
    );
  }
}

export default Intro;
