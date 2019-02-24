import React, { Component } from 'react';
import CopyrightUpdate from 'copyright-update';
import '../css/Subscribe.css';

// Using a ES6 class component as it contains state.
class EmailSuccess extends Component {
  render() {
    return (
      <div className="container-fluid pl-0 pr-0">
        <div 
          className="
            container-fluid 
            d-flex 
            align-items-center 
            justify-content-center
            pl-0 pr-0
          ">
          <div className="card col-md-8">
            <div className="card-body">
              <div className="text-center mb-9">
                <p className="lead-md font-weight-bold">
                  Message Sent...
                </p>
                <p>
                  Thank you for getting in touch!
                </p>
                <p className="mb-5">
                  Someone will respond within 24hrs. Have a great day!
                </p>
                <p className="mb-4b">
                  <a href="/subscribe" alt="Subscribe to newsletter" className="bg-black text-light mx-1">&nbsp;Subscribe&nbsp;</a> to my weekly newsletter<br />
                  or follow me on <a href="http://twitter.com/guylepage3" alt="Subscribe to newsletter" className="bg-black text-light mx-1">&nbsp;Twitter&nbsp;</a>.
                </p>
              </div>
              <div className="text-center mb-4">
                <a
                  className="btn btn-secondary btn-subscribe mx-auto"
                  style={{
                    textDecoration: 'none'
                  }}
                  href="/home" 
                  role="button"
                  tabIndex="1">
                  Back to home
                </a>
                
              </div>
              <div className="text-center small letter-space mt-9 mb-4">
                <CopyrightUpdate 
                  style={{
                    display: 'inline-block'
                  }}
                />
                &nbsp;Guy Lepage.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmailSuccess;
