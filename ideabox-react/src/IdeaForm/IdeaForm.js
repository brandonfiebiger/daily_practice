import React, { Component } from 'react';


export class IdeaForm extends Component {
  constructor() {
    super();

  }


  render() {
    return (
      <form>
        <input type="text" placeholder="title"/>
        <input type="text" placeholder="body"/>
        <button type="submit">Add Idea</button>
      </form>
      )
  }
}