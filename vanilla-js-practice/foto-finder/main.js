const selectFile = document.querySelector('.select-file');
const preview = document.querySelector('.preview');
const addPhotoForm = document.querySelector('.add-photo-form');
const titleInput = document.querySelector('.title-input');
const captionInput = document.querySelector('.caption-input');

selectFile.addEventListener('change', () => selectAndPreviewFile());
addPhotoForm.addEventListener('submit', (e) => handleAddPhoto(e));

const selectAndPreviewFile = () => {
  const reader = new FileReader();
  const file = selectFile.files[0];
  reader.addEventListener('load', () => {
    preview.src = reader.result;
  }, false);

  if(file) {
    reader.readAsDataURL(file);
  }
}

const handleAddPhoto = (e) => {
  e.preventDefault();
  const reader = new FileReader();
  console.log(reader.result);
  const title = titleInput.value;
  const caption = captionInput.value;
  const file = selectFile.files[0];
  if (!title || !caption || !file) {
    return;
  } else {
    const photo = new Photo(title, caption, file);
    Photo.saveToStorage(photo);
  }
}


