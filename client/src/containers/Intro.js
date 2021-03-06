import React, { Component } from 'react';
import FooterMini from '../components/FooterMini';
import Splash from '../components/Splash';

class Intro extends Component {
  componentDidMount() {
    const { history } = this.props;
    setTimeout(() => {
      history.push('/home')
    }, 4000);
  }
  componentWillUnmount() {
    clearTimeout(this.redirectTimeout);
  }
  render() {
    return (
      <div className="d-flex w-100 h-100 mx-auto flex-column"
        style={{
          backgroundColor: '#000'
        }}>
        <div 
          style={{
            paddingTop: '32px'
          }}>
        </div>
        <Splash />
        <FooterMini />
      </div>
    );
  }
}

export default Intro;
