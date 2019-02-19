import React, { Component } from 'react';

class SubscribeForm extends Component {
  render() {
    return (
      <form action="/" method="POST">
        <div className="form-group">
          <label htmlFor="firstName">
            First name 
            <span className="font-italic">
              &nbsp;- Optional
            </span>
          </label>
          <input 
            name="firstName"
            type="text"
            id="firstName"
            className="form-control"
            placeholder="First name (optional)"
            autoComplete="off"
            tabIndex="1"
            aria-invalid="false"
            aria-controls="first-name"
            aria-label="What is your first name?"
            aria-activedescendant="first-name-item-0" />
          <label htmlFor="lastName">
            Last name
            <span className="font-italic">
              &nbsp;- Optional
            </span>
          </label>
          <input 
            name="lastName"
            type="text"
            id="lastName"
            className="form-control"
            placeholder="Last name (optional)"
            autoComplete="off"
            tabIndex="2"
            aria-invalid="false"
            aria-controls="last-name"
            aria-label="What is your last name?"
            aria-activedescendant="last-name-item-0" />
          <label htmlFor="email">
            Email address
          </label>
          <input 
            name="email"
            type="text"
            id="email"
            className="form-control"
            placeholder="Email address"
            required="true"
            autoComplete="off"
            tabIndex="3"
            autocapitalize="none"
            aria-invalid="false"
            aria-controls="email"
            aria-label="What is your email address?"
            aria-activedescendant="email-item-0" />
        </div>
        <div>
          <input type="submit" value="Subscribe" tabIndex="4" className="btn btn-black btn-subscribe btn-block"/>
        </div>
      </form>
    );
  }
}

export default SubscribeForm;