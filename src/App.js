import React, { Fragment } from 'react';
import './App.css';

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
    if (!firstName.trim()) { alert('First name is required'); isValid = false; }
    else if (!emailAddress.trim()) { alert('Email address is required'); isValid = false; }
    else if (!password.trim()) { alert('Password is required'); isValid = false; }
    return isValid;
  }

  getFormContent() {
    const { firstName, emailAddress, password} = this.state;
    return (
      <Fragment>
        <div className='weaker-title'>Let's</div>
        <div className='stronger-title'>Sign Up</div>
        <div className='verbiage'>Use the form below to sign up for this super awesome service. You're only a few steps away!</div>
        <div className='text-input-label'>First Name</div>
        <input className='text-input' type='text' value={firstName} onChange={this.updateFirstName}></input>
        <div className='text-input-label'>Email Address</div>
        <input className='text-input' type='text' value={emailAddress} onChange={this.updateEmailAddress}></input>
        <div className='text-input-label'>Password</div>
        <input className='text-input' type='password' value={password} onChange={this.updatePassword}></input>
        <br/>
        <button className='stylish-red-button' onClick={this.signUp}>Sign Up</button>
      </Fragment>
    );
  }

  getConfirmationContent() {
    const { firstName, emailAddress } = this.state;
    return (
      <Fragment>
        <div className='weaker-title'>Welcome,</div>
        <div className='stronger-title'>{firstName}!</div>
        <div className='verbiage'>You have been registered for this awesome service. Please check your email listed below for instructions.</div>
        <div className='bolder-and-stronger'>{emailAddress}</div>
        <button className='stylish-red-button' onClick={this.signIn}>Sign In</button>
      </Fragment>
    );
  }

  render() {
    if (this.state.shouldShowConfirmation) return this.getConfirmationContent();
    return this.getFormContent();
  }
}

export default App;
