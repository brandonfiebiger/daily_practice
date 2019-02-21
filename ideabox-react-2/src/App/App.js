import React, { Component } from 'react';
import { IdeaForm } from '../IdeaForm/IdeaForm';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      ideas: []
    };
  };


  addIdea = (idea) => {
    this.setState({
      ideas: [idea, ...this.state.ideas]
    });
  };


  render() {
    return (
      <React.Fragment>
        <IdeaForm addIdea={ this.addIdea }/>
      </React.Fragment>
    );
  };
};

export default App;
