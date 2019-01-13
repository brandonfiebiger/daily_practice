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
  submitButton.classList.add('disabled');
  submitButton.setAttribute('disabled', true);
});

ideaForm.addEventListener('keyup', (e) => {
  if(e.target.classList.contains('idea-input')) {
    toggleDisabled();
  }
})

ideaList.addEventListener('click', (e) => {
  if (e.target.className === 'delete-button') {
    e.target.parentElement.remove();
    Idea.deleteIdea(e.target.dataset.id);
  } else if (e.target.className === 'upvote' || e.target.className === 'downvote') {
    const newQuality = Idea.updateQuality(e);
    e.target.parentElement.previousSibling.previousSibling.innerText = newQuality;
  }
})

const toggleDisabled = () => {
    if(titleInput.value && contentInput.value) {
      submitButton.classList.remove('disabled');
      submitButton.removeAttribute("disabled");
    } else {
      submitButton.classList.add('disabled');
      submitButton.setAttribute("disabled", true);
    }
}

const addToDom = (idea) => {
  const ideaElement = document.createElement('li');

  ideaElement.innerHTML = `
    <h2 class="idea-title">${idea.title}</h2>
    <p class="idea-content">${idea.content}</p>
    <p class="idea-quality">${idea.quality}</p>
    <span class="vote-buttons" data-id=${idea.id}>
      <button class="upvote">&uarr;</button>
      <button class="downvote">&darr;</button>
    </span>
    <button class="delete-button" data-id=${idea.id}>X</button>
`;

  ideaList.prepend(ideaElement);
}
