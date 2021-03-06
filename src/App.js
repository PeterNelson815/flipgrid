import React from 'react';
import './App.css';
import { CONFIRMATION_VERBIAGE, FORM_VERBIAGE } from './constants';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      emailAddress: '',
      password: '',
      shouldShowConfirmation: false
    }

    this.updateFirstName = this.updateFirstName.bind(this);
    this.updateEmailAddress = this.updateEmailAddress.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.signUp = this.signUp.bind(this);
    this.validateFields = this.isFormValid.bind(this);
    this.getFormContent = this.getFormContent.bind(this);
    this.getConfirmationContent = this.getConfirmationContent.bind(this);
  }

  updateFirstName(event) {
    this.setState({ firstName: event.target.value });
  }

  updateEmailAddress(event) {
    this.setState({ emailAddress: event.target.value });
  }

  updatePassword(event) {
    this.setState({ password: event.target.value });
  }

  signUp() {
    if (!this.isFormValid()) return;
    this.setState({ shouldShowConfirmation: true });
  }

  signIn() {
    console.log('Not yet implemented');
  }

  isFormValid() {
    const { firstName, emailAddress, password} = this.state;
    let isValid = true;

    // For brevity, only checking for truthiness i.e. not empty strings
    // Also, calling 'alert' here violates the single responsibility principle - helper
    // function like isFormValid should only compute its boolean and return, not output to the user

    if (!firstName.trim()) { alert('First name is required'); isValid = false; }
    else if (!emailAddress.trim()) { alert('Email address is required'); isValid = false; }
    else if (!password.trim()) { alert('Password is required'); isValid = false; }
    return isValid;
  }

  getFormContent() {
    const { firstName, emailAddress, password} = this.state;
    return (
      <div className='content-container'>
        <div className='title'>Let's<br/><strong>Sign Up</strong></div>
        <div className='verbiage'>{FORM_VERBIAGE}</div>

        <div className='text-input-label'>First Name</div>
        <input className='text-input' type='text' value={firstName} onChange={this.updateFirstName}></input>

        <div className='text-input-label'>Email Address</div>
        <input className='text-input' type='text' value={emailAddress} onChange={this.updateEmailAddress}></input>

        <div className='text-input-label'>Password</div>
        <input className='text-input' type='password' value={password} onChange={this.updatePassword}></input>

        <br/>
        <button className='stylish-red-button' onClick={this.signUp}>Sign Up</button>
      </div>
    );
  }

  getConfirmationContent() {
    const { firstName, emailAddress } = this.state;
    return (
      <div className='content-container'>
        <div className='title'>Welcome,<br/><strong>{firstName}!</strong></div>
        <div className='verbiage'>{CONFIRMATION_VERBIAGE}</div>
        <div><strong>{emailAddress}</strong></div>
        <button className='stylish-red-button' onClick={this.signIn}>Sign In</button>
      </div>
    );
  }

  render() {
    if (this.state.shouldShowConfirmation) {
      return this.getConfirmationContent();
    }
    return this.getFormContent();
  }
}

export default App;
