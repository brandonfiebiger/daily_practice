class Idea {
  constructor(title, content) {
    this.title = title;
    this.content = content;
    this.id = Date.now();
    this.quality = 'swill';
  }


  static addIdea(idea) {
    console.log(idea)
  }
}