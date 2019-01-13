const selectFile = document.querySelector('.select-file');
const preview = document.querySelector('.preview');
const addPhotoForm = document.querySelector('.add-photo-form');

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
  console.log('hello');
}


