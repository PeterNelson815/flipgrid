import React, { Fragment } from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      emailAddress: '',
      password: ''
    }

    this.updateFirstName = this.updateFirstName.bind(this);
    this.updateEmailAddress = this.updateEmailAddress.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.signUp = this.signUp.bind(this);
    this.validateFields = this.validateFields.bind(this);
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
    this.validateFields();
    // flip to the welcome screen
  }

  validateFields() {
    // all three fields are required to submit
  }

  render() {
    return (
      <Fragment>
        <div className='pre-title'>Let's</div>
        <div className='title'>Sign Up</div>
        <div className='verbiage'>Use the form below to sign up for this super awesome service. You're only a few steps away!</div>
        <div className='text-input-label'>First Name</div>
        <input className='text-input' type='text' value={this.state.firstName} onChange={this.updateFirstName}></input>
        <div className='text-input-label'>Email Address</div>
        <input className='text-input' type='text' value={this.state.emailAddress} onChange={this.updateEmailAddress}></input>
        <div className='text-input-label'>Password</div>
        <input className='text-input' type='password' value={this.state.password} onChange={this.updatePassword}></input>
        <br/>
        <button onClick={this.signUp}>Sign Up</button>
      </Fragment>
    );
  }
}

export default App;
