import React, { Component } from 'react';


export class IdeaForm extends Component {
  constructor(props) {
    super();

    this.state = {
      title: "",
      body: ""
    }
  }

  handleAddIdea = (e) => {
    e.preventDefault();
    this.props.addIdea(this.state);
  }


  render() {
    return (
      <form onSubmit={this.handleAddIdea} >
        <input type="text" placeholder="title"/>
        <input type="text" placeholder="body"/>
        <button type="submit">Add Idea</button>
      </form>
      )
  }
}