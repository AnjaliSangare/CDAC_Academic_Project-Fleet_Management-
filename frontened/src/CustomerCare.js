


import React, { Component } from 'react';
import './styles.css';

export default class CustomerCare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      feedback: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, feedback } = this.state;

    // You can perform actions with the feedback data here, like sending it to a server

    console.log('Feedback submitted:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Feedback:', feedback);

    // Clear form fields after submission
    this.setState({
      name: '',
      email: '',
      feedback: ''
    });
  }

  render() {
    const { name, email, feedback } = this.state;

    return (
      <div className="feedback-form">
        <h2>Feedback Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Feedback:</label>
            <textarea
              name="feedback"
              value={feedback}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    );
  }
}
