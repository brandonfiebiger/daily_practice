class Idea {
  constructor(title, body) {
    this.title = title;
    this.body = body;
    this.id = Date.now();
    this.quality = 'swill';
  }

  static addIdeaToStorage(idea) {
    let ideasArray = JSON.parse(localStorage.getItem('ideas')) || [];
    ideasArray = [...ideasArray, idea];
    localStorage.setItem('ideas', JSON.stringify(ideasArray));
  }

  static deleteFromStorage(id) {
    let ideasArray = JSON.parse(localStorage.getItem('ideas'));
    ideasArray = ideasArray.filter(idea => idea.id != id);
    localStorage.setItem('ideas', JSON.stringify(ideasArray));
  }
}