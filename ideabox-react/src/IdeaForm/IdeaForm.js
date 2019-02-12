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

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({
      [name]: value
    })
  }


  render() {
    return (
      <form onSubmit={this.handleAddIdea} >
        <input type="text" placeholder="title" name="title" value={this.state.title} onChange={this.handleChange}/>
        <input type="text" placeholder="body" name="body" value={this.state.body} onChange={this.handleChange}/>
        <button type="submit">Add Idea</button>
      </form>
      )
  }
}