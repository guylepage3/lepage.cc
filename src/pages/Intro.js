import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Splash from './Splash';

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
      <div className="d-flex w-100 h-100 mx-auto px-4 flex-column">
        <Header />
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
