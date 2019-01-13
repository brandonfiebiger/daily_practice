class Photo {
  constructor(title, caption, file) {
    this.id = Date.now();
    this.title = title;
    this.caption = caption;
    this.file = file;
    this.favorite = false;
  }

  static saveToStorage(photo) {
    console.log(photo);
  }
}