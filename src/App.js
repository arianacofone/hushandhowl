import React, { Component } from 'react';
import './App.css';
// import { Registration } from './components/registration/Registration.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      email: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleSubmit(event) {
    alert(this.state.email + ', thanks for joining Hush/Howl!');
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>HUSH/HOWL</h2>
        <h4>AN EXPERIMENT IN THE EVERYDAY SUPRISES</h4>
        <form onSubmit={this.handleSubmit} id="form">
          <input
            className="input"
            type="email"
            placeholder="EMAIL"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            className="input"
            id="sendButton"
            type="submit"
            value="join the club"
            onClick={this.handleSubmit}
          />
        </form>
      </div>
    );
  }
}

export default App;
