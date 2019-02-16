import React, { Component } from 'react';



export class IdeaForm extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      body: ''
    }
  }

  handleChange = (e) => {

  }




  render() {
    return(
      <form>
        <input 
          type="text" 
          placeholder="title" 
          name="title" 
          value={this.state.title} 
          onChange={ this.handleChange } />
        <input 
          type="text" 
          placeholder="body" 
          name="body" 
          value={this.state.body} 
          onChange={ this.handleChange } />
        <button type="submit">Add Idea</button>
      </form>
    )
  }
}