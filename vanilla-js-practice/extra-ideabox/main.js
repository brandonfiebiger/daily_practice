const titleInput = document.querySelector('.title-input');
const bodyInput = document.querySelector('.body-input');
const ideaForm = document.querySelector('.idea-form');
const ideaList = document.querySelector('.idea-list');

const addIdea = (e) => {
  e.preventDefault();
  const title = titleInput.value;
  const body = bodyInput.value;
  
  const idea = new Idea(title, body);
  
  const ideaCard = document.createElement('li');
  ideaCard.className = 'idea-card';
  ideaCard.innerHTML = `
    <h2>${title}</h2>
    <p>${body}</p>
  `
}

ideaForm.addEventListener('submit', addIdea);