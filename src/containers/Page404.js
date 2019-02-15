import React, { Component } from 'react';

class Page404 extends Component {
  render() {
    return (
      <main 
        role="main" 
        className="container text-center mx-auto my-auto anima-fadein pl-4c pr-4c">
        <div className="row">
          <div className="container text-center text-white">
            <h1 className="font-weight-bold">
              :(&nbsp;&nbsp;Sorry
            </h1>
            <p className="lead mb-4b"
              style={{
                fontWeight: '600'
              }}>
              Something went wrong. We can't seem to find the page you're looking for.
            </p>
            <p className="mb-4b">
              Error code: 404.
            </p>
            <p>
              <a
                className="btn btn-primary btn-subscribe mx-auto"
                style={{
                  textDecoration: 'none',
                  maxWidth: '280px'
                }}
                href="/subscribe" 
                role="button"
                tabIndex="1">
                Back to Home
              </a>
            </p>
          </div>
        </div>
      </main>
    );
  }
}

export default Page404;
