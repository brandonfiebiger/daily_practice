const selectFile = document.querySelector('.select-file');
const preview = document.querySelector('.preview');


selectFile.addEventListener('change', () => {
  const reader = new FileReader();
  const file = selectFile.files[0];
  reader.addEventListener('load', () => {
    preview.src = reader.result;
  }, false);

  if(file) {
    reader.readAsDataURL(file);
  }
})
