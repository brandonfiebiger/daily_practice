const titleInput = document.querySelector('.title-input');
const bodyInput = document.querySelector('.body-input');
const ideaForm = document.querySelector('.idea-form');
const ideaList = document.querySelector('.idea-list');

window.addEventListener('load', () => {
  const ideasArray = JSON.parse(localStorage.getItem('ideas'));

  ideasArray.forEach(idea => {
    addIdeaToDom(idea);
  })
})

const handleAddIdea = (e) => {
  e.preventDefault();
  const title = titleInput.value;
  const body = bodyInput.value;
  const idea = new Idea(title, body);
  addIdeaToDom(idea)
  Idea.addIdea(idea);
  ideaForm.reset();
}

const addIdeaToDom = (idea) => {
  const ideaCard = document.createElement('li');
  ideaCard.className = 'idea-card';
  ideaCard.dataset.id = idea.id;
  ideaCard.innerHTML = `
    <h2>${idea.title}</h2>
    <p>${idea.body}</p>
    <button class="delete-button">X</button>
    <p>${idea.quality}</p>
    <button class="up-arrow">&uarr;</button>
    <button class="down-arrow">&darr;</button>
  `;

  ideaList.prepend(ideaCard);
}

const handleDeleteIdea = (e) => {
  Idea.deleteIdea(e.target.parentElement.dataset.id);
  e.target.parentElement.remove();
}

const handleUpdateQualityUp = (e) => {
  switch(e.target.previousSibling.previousSibling.innerText) {
    case 'swill':
      e.target.previousSibling.previousSibling.innerText = 'plausible';
      break;
    case 'plausible':
      e.target.previousSibling.previousSibling.innerText = 'Great!';
      break;
  }
}

const handleUpdateQualityDown = (e) => {
  switch(e.target.previousSibling.previousSibling.previousSibling.previousSibling.innerText) {
    case 'Great!':
      e.target.previousSibling.previousSibling.previousSibling.previousSibling.innerText = 'plausible';
      break;
    case 'plausible':
      e.target.previousSibling.previousSibling.previousSibling.previousSibling.innerText = 'swill';
      break;
  }
}

ideaList.addEventListener('click', (e) => {
  if (e.target.className === 'delete-button') {
    handleDeleteIdea(e);
  } else if (e.target.className === 'up-arrow') {
    handleUpdateQualityUp(e);
  } else if (e.target.className === 'down-arrow') {
    handleUpdateQualityDown(e);
  }
});

ideaForm.addEventListener('submit', handleAddIdea);