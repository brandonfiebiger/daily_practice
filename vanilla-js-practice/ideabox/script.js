const ideaForm = document.querySelector('.idea-form');
const titleInput = document.querySelector('.title-input');
const contentInput = document.querySelector('.content-input');
const submitButton = document.querySelector('.submit-button');
const ideaList = document.querySelector('.idea-list');

ideaForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const idea = new Idea(titleInput.value, contentInput.value);
  const ideaElement = document.createElement('li');
  ideaElement.innerHTML = idea.markup;
  ideaList.prepend(ideaElement);
  Idea.addIdea(idea);
  ideaForm.reset();
})