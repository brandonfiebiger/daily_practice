class Idea {
  constructor(title, body) {
    this.title = title;
    this.body = body;
    this.id = Date.now();
    this.quality = 'swill';
  }

  static addIdeaToStorage(idea) {
    console.log(idea);
  }
}