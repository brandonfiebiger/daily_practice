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
    console.log(idea);
  }


  render() {
    return (
     <div>
       <h1>IdeaBox</h1>
       <IdeaForm addIdea={this.addIdea}/>
       <IdeaList />
     </div>
    );
  }
}

export default App;
