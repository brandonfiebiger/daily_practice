import React, { Component } from 'react';
import { IdeaForm } from '../IdeaForm/IdeaForm';
import { IdeaList } from '../IdeaList/IdeaList';
import './App.css';
import { throws } from 'assert';

class App extends Component {
  constructor() {
    super();

    this.state = {
      ideas: [],
    }
  }

  addIdea = (idea) => {
    idea.id = Date.now();
    this.setState({
      ideas: [idea, ...this.state.ideas]
    })
  }

  deleteIdea = (id) => {
    const filteredIdeas = this.state.ideas.filter(idea => idea.id !== id);

    this.setState({
      ideas: filteredIdeas
    })
  }


  render() {
    return (
     <div>
       <h1>IdeaBox</h1>
       <IdeaForm addIdea={this.addIdea}/>
       <IdeaList ideas={this.state.ideas} deleteIdea={this.deleteIdea} />
     </div>
    );
  }
}

export default App;
