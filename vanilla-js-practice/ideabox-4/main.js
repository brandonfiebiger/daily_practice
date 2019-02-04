

const addIdeaToDom = (idea) => {
  const li = document.createElement('li');
  li.dataset.id = idea.id;

  li.innerHTML = `
    <h2>${idea.title}</h2>
    <p>${idea.body}</p>
    <button class="up-arrow">&uarr;</button>
    <button class="down-arrow">&darr;</button>
    <p>${idea.quality}</p>
    <button class="delete-button">X</button>
  `;

  document.querySelector('.idea-list').prepend(li);
}

const handleAddIdea = (e) => {
  e.preventDefault();
  const title = document.querySelector('.title-input').value;
  const body = document.querySelector('.body-input').value;

  const idea = new Idea(title, body);
  addIdeaToDom(idea);
  Idea.addIdeaToStorage(idea);
}

document.querySelector('.idea-form').addEventListener('submit', handleAddIdea);

window.addEventListener('load', () => JSON.parse(localStorage.getItem('ideas')).forEach(idea => addIdeaToDom(idea)));

document.querySelector('.idea-list').addEventListener('click', (e) => {
  if (e.target.className === 'delete-button') {
    Idea.deleteFromStorage(e.target.parentElement.dataset.id);
    e.target.parentElement.remove();
  }
})