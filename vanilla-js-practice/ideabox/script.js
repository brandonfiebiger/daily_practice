const ideaForm = document.querySelector('.idea-form');
const titleInput = document.querySelector('.title-input');
const contentInput = document.querySelector('.content-input');
const submitButton = document.querySelector('.submit-button');
const ideaList = document.querySelector('.idea-list');

window.onload = () => {
  const ideasArray = JSON.parse(localStorage.getItem('ideas')) || [];
  ideasArray.forEach(idea => addToDom(idea));
};

ideaForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const idea = new Idea(titleInput.value, contentInput.value);
  addToDom(idea)
  Idea.addIdea(idea);
  ideaForm.reset();
});

ideaList.addEventListener('click', (e) => {
  if (e.target.className === 'delete-button') {
    e.target.parentElement.remove();
    Idea.deleteIdea(e.target.dataset.id);
  } else if (e.target.className === 'upvote' || e.target.className === 'downvote') {
    const newQuality = Idea.updateQuality(e);
    console.log(newQuality);
    e.target.parentElement.previousSibling.previousSibling.innerText = newQuality;
  }
})

const addToDom = (idea) => {
  const ideaElement = document.createElement('li');

  ideaElement.innerHTML = `
    <h2 class="idea-title">${idea.title}</h2>
    <p class="idea-content">${idea.content}</p>
    <p class="idea-quality">${idea.quality}</p>
    <div class="vote-buttons" data-id=${idea.id}>
      <button class="upvote">&uarr;</button>
      <button class="downvote">&darr;</button>
    </div>
    <button class="delete-button" data-id=${idea.id}>X</button>
`;

  ideaList.prepend(ideaElement);
}
