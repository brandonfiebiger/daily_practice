import React from 'react';

export const IdeaCard = (props) => {

  const handleDeleteIdea = () => {
    props.deleteIdea(props.id)
  }

  return (
    <li>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <button onClick={handleDeleteIdea}>X</button>
    </li>
  )
}