class Idea {
  constructor(title, body) {
    this.title = title;
    this.body = body;
    this.quality = 'swill';
    this.id = Date.now();
  }

  static addIdea() {
    console.log('hooked up');
  }
}