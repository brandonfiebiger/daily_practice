const titleInput = document.querySelector('.title-input');
const bodyInput = document.querySelector('.body-input');
const ideaForm = document.querySelector('.idea-form');
const ideaList = document.querySelector('.idea-list');

const handleAddIdea = (e) => {
  e.preventDefault();
  const title = titleInput.value;
  const body = bodyInput.value;
  const idea = new Idea(title, body);
  prependIdea(idea);
  Idea.addIdea(idea);
  ideaForm.reset();
}

const prependIdea = (idea) => {
  const li = document.createElement('li');
  li.dataset.id = idea.id;
  li.innerHTML = `
    <h2>${idea.title}</h2>
    <p>${idea.body}</p>
    <button class="up-arrow">&uarr;</button>
    <button class="down-arrow">&darr;</button>
    <p>${idea.quality}</p>
    <button class="delete-button">x</button>
`
  ideaList.prepend(li);
}



ideaForm.addEventListener('submit', handleAddIdea);

ideaList.addEventListener('click', (e) => {
  if (e.target.className === 'delete-button') {
    Idea.deleteIdea(e.target.parentElement.dataset.id);
    e.target.parentElement.remove();
  }
})

window.addEventListener('load', () => {
  JSON.parse(localStorage.getItem('ideas')).forEach(idea => prependIdea(idea));
})

