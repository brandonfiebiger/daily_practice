class Photo {
  constructor(title, caption, file) {
    this.id = Date.now();
    this.title = title;
    this.caption = caption;
    this.file = file;
    this.favorite = false;
  }

  static saveToStorage(photo) {
    let photosArray = JSON.parse(localStorage.getItem('photos')) || [];
    photosArray.unshift(photo);
    localStorage.setItem('photos', JSON.stringify(photosArray));
  }

  static deleteFromStorage(id) {
    let photosArray =  JSON.parse(localStorage.getItem('photos'));
    photosArray = photosArray.filter(photo => photo.id != id);
    localStorage.setItem('photos', JSON.stringify(photosArray));
  }  

  static toggleFavorite(id) {
    let photosArray = JSON.parse(localStorage.getItem('photos'));

    photosArray.forEach(photo => {
      if (photo.id == id) {
        photo.favorite = !photo.favorite;
      }
    });

    localStorage.setItem('photos', JSON.stringify(photosArray));
  }
}