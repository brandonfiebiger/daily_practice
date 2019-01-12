class Idea {
  constructor(title, content) {
    this.title = title;
    this.content = content;
    this.id = Date.now();
    this.quality = 'swill';
    this.markup = `
      <h2>${this.title}</h2>
      <p>${this.content}</p>
      <p>${this.quality}</p>
      <button data-id=${this.id}>X</button>
  `;
  }


  static addIdea(idea) {
    let ideasArray = JSON.parse(localStorage.getItem('ideas')) || [];
    ideasArray = [idea, ...ideasArray];
    localStorage.setItem('ideas', JSON.stringify(ideasArray));
  }
}