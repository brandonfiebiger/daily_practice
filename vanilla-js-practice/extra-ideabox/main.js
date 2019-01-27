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
  `;

  ideaList.prepend(ideaCard);
}

const handleDeleteIdea = (e) => {
  Idea.deleteIdea(e.target.parentElement.dataset.id);
  e.target.parentElement.remove();
}

ideaList.addEventListener('click', (e) => {
  if (e.target.className === 'delete-button') {
    handleDeleteIdea(e);
  }
});

ideaForm.addEventListener('submit', handleAddIdea);