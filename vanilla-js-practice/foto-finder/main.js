const selectFile = document.querySelector('.select-file');
const preview = document.querySelector('.preview');
const addPhotoForm = document.querySelector('.add-photo-form');
const photoList = document.querySelector('.photo-list');
const titleInput = document.querySelector('.title-input');
const captionInput = document.querySelector('.caption-input');
const addPhotoButton = document.querySelector('.add-photo-button');
const photosArray = JSON.parse(localStorage.getItem('photos')) || [];
const reader = new FileReader();

window.onload = () => {
  photosArray.forEach(photo => prependPhoto(photo));
}
selectFile.addEventListener('change', () => selectAndPreviewFile());
addPhotoForm.addEventListener('submit', (e) => handleAddPhoto(e));
photoList.addEventListener('click', (e) => {
  if (e.target.className === 'delete-icon') {
    Photo.deleteFromStorage(e.target.parentElement.dataset.id);
    e.target.parentElement.remove();
  }
})

const selectAndPreviewFile = () => {
  const file = selectFile.files[0];
  reader.addEventListener('load', () => {
    preview.src = reader.result;
  }, false);

  if(file) {
    reader.readAsDataURL(file);
  };
};

const handleAddPhoto = (e) => {
  e.preventDefault();
  const title = titleInput.value;
  const caption = captionInput.value;
  const file = selectFile.files[0];
  if (!title | !caption || !file) {
    return;
  } else {
    const photo = new Photo(title, caption, reader.result);
    reader.readAsDataURL(file);
    Photo.saveToStorage(photo);
    prependPhoto(photo);
  }
};

const prependPhoto = (photo) => {
  const photoItem = document.createElement('li');
  photoItem.className = 'photo-card';

  photoItem.innerHTML = `
      <h2 class="photo-title">${photo.title}</h2>
      <img src=${photo.file} class="photo-card-image" />
      <p>${photo.caption}</p>
      <img src="fotofinder-assets/favorite.svg" class="favorite-icon">
      <img src="fotofinder-assets/delete.svg" class="delete-icon">
  `;
  photoItem.className = "photo-card";
  
  photoItem.setAttribute('data-id', photo.id);
  photoList.prepend(photoItem);
};







