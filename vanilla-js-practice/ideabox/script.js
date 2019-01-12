const ideaForm = document.querySelector('.idea-form');
const titleInput = document.querySelector('.title-input');
const contentInput = document.querySelector('.content-input');
const submitButton = document.querySelector('.submit-button');
const ideaList = document.querySelector('.idea-list');

window.onload = () => {
  const ideasArray = JSON.parse(localStorage.getItem('ideas'));
  ideasArray.forEach(idea => addToDom(idea));
};

ideaForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const idea = new Idea(titleInput.value, contentInput.value);
  addToDom(idea)
  Idea.addIdea(idea);
  ideaForm.reset();
});

const addToDom = (idea) => {
  const ideaElement = document.createElement('li');
  ideaElement.innerHTML = idea.markup;
  ideaList.prepend(ideaElement);
}
