class Idea {
  constructor(title, content) {
    this.title = title;
    this.content = content;
    this.id = Date.now();
    this.quality = 'swill';
    this.markup = `
      <h2 class="idea-title">${this.title}</h2>
      <p class="idea-content">${this.content}</p>
      <p class="idea quality">${this.quality}</p>
      <button class="delete-button" data-id=${this.id}>X</button>
  `;
  }


  static addIdea(idea) {
    let ideasArray = JSON.parse(localStorage.getItem('ideas')) || [];
    ideasArray = [...ideasArray, idea];
    localStorage.setItem('ideas', JSON.stringify(ideasArray));
  }

  static deleteIdea(id) {
    let ideasArray = JSON.parse(localStorage.getItem('ideas'));
    ideasArray = ideasArray.filter(idea => idea.id != id);
    localStorage.setItem('ideas', JSON.stringify(ideasArray));
  }
}