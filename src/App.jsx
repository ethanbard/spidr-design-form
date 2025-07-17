import React from 'react'
import './App.css'

class App extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: '',
    guessTheCost: '',
    secretPIN: ''
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
  };

  render() {
    return (
      <>
        <div>
          <form onSubmit={this.onFormSubmit}>
            <div id='right-align'>
              <label>First name: </label>
              <input
                type='text'
                value={this.state.firstName}
                onChange={(e) => this.setState((prev) => ({...prev, firstName: e.target.value}))}
                ></input><br/>
              <label>Last name: </label>
              <input
                type='text'
                value={this.state.lastName}
                onChange={(e) => this.setState((prev) => ({...prev, lastName: e.target.value}))}
                ></input><br/>
              <label>Phone number: </label>
              <input
                type='text'
                value={this.state.phoneNumber}
                onChange={(e) => this.setState((prev) => ({...prev, phoneNumber: e.target.value}))}
                ></input><br/>
              <label>Email address: </label>
              <input
                type='text'
                value={this.state.emailAddress}
                onChange={(e) => this.setState((prev) => ({...prev, emailAddress: e.target.value}))}
                ></input><br/>
              <label>Guess the air fryer’s cost: </label>
              <input
                type='text'
                value={this.state.guessTheCost}
                onChange={(e) => this.setState((prev) => ({...prev, guessTheCost: e.target.value}))}
                ></input><br/>
              <label>Secret PIN: </label>
              <input
                type='text'
                placeholder='####-####-####-####'
                value={this.state.secretPIN}
                onChange={(e) => this.setState((prev) => ({...prev, secretPIN: e.target.value}))}
                ></input><br/>
            </div>
            <input type='submit' value={"Submit"}></input>
          </form>
        </div>
      </>
    )
  }
}

export default App
