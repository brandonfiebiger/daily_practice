import React from 'react';
import { IdeaCard } from '../IdeaCard/IdeaCard';

export const IdeaList = (props) => {
  
  const displayIdeas = () => {
    return props.ideas.map(idea => <IdeaCard title={idea.title} body={idea.body} key={idea.id} id={idea.id} deleteIdea={props.deleteIdea}/>)
  }

  
  return (
    <ul>
      { displayIdeas() }
    </ul>
  )
}