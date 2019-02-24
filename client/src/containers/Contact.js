import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import NavLine from '../components/NavLine';
import Footer from '../components/Footer';
import Social from '../components/Social';
import ContactForm from '../components/ContactForm';
import '../css/Subscribe.css';

class About extends Component {
  state = {
    socialItems: [
      {
        id: 1,
        href: 'https://github.com/guylepage3/',
        alt: 'GitHub guylepage3 (Guy Lepage)',
        icon: 'github',
        text: 'GitHub'
      },
      {
        id: 2,
        href: 'https://www.npmjs.com/~guylepage3',
        alt: 'npm guylepage3 (Guy Lepage)',
        icon: 'npm',
        text: 'npm'
      },
      {
        id: 3,
        href: 'https://twitter.com/guylepage3',
        alt: 'Twitter Guy Lepage (@guylepage3)',
        icon: 'twitter',
        text: 'Twitter'
      },
      {
        id: 4,
        href: 'https://www.linkedin.com/in/guylepage/',
        alt: 'Guy Lepage | LinkedIn',
        icon: 'linkedin',
        text: 'LinkedIn'
      },
      {
        id: 5,
        href: 'https://medium.com/@guylepage3',
        alt: 'Guy Lepage – Medium',
        icon: 'medium',
        text: 'Medium'
      }
    ]
  }

  render() {
    return (
      <div>
        <Navbar 
          style={{
            zIndex: '10',
            backgroundColor: 'transparent'
          }}/>
        <NavLine />
        <div style={{ marginLeft: '6px', marginRight: '6px' }}>
          <div 
            className="container text-left mb-8 pb-8"
            style={{
              maxWidth: '550px'
            }}>
            <div></div>
            <h1 className="h1-editorial mb-4b">
              Contact
            </h1>
            <p className="mb-5">
              General inquiries, please fill out the form below.
            </p>
            
            <ContactForm />
            <div className="text-center pt-6">
              <Social 
                socialItems={this.state.socialItems}
                className="lead"
                listAlign="list-inline-item"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
