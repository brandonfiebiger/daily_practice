import React, { Component } from 'react';



export class IdeaForm extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      title: '',
      body: ''
    }
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addIdea(this.state)
  }




  render() {
    return(
      <form onSubmit={ this.handleSubmit} >
        <input 
          type="text" 
          placeholder="title" 
          name="title" 
          value={this.state.title} 
          onChange={ this.handleChange } 
          required
          />
        <input 
          type="text" 
          placeholder="body" 
          name="body" 
          value={this.state.body} 
          onChange={ this.handleChange } 
          required
          />
        <button type="submit">Add Idea</button>
      </form>
    )
  }
}