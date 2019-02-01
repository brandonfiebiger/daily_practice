class Idea {
  constructor(title, body) {
    this.title = title;
    this.body = body;
    this.quality = 'swill';
    this.id = Date.now();
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