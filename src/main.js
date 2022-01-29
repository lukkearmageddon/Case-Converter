const ucBtn = document.getElementById('upper-case');
const lcBtn = document.getElementById('lower-case');
const pcBtn = document.getElementById('proper-case');
const scBtn = document.getElementById('sentence-case');
const dwnldBtn = document.getElementById('save-text-file');

const toInput = document.querySelector('textarea');

ucBtn.addEventListener('click', () => {
  if (toInput.value !== '') {
	toInput.value = toInput.value.toUpperCase();
  }
})

lcBtn.addEventListener('click', () => {
  if (toInput.value !== '') {
	toInput.value = toInput.value.toLowerCase();
  }
})

pcBtn.addEventListener('click', () => {
  if (toInput.value !== '') {
	toInput.value = toInput.value.split(' ')
	  .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
	  .join(' ');
  }
})

scBtn.addEventListener('click', () => {
  if (toInput.value !== '') {
	toInput.value = toInput.value.toLowerCase()
	  .replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c){return c.toUpperCase()});
  }
})

dwnldBtn.addEventListener('click', (e) => {
  e.preventDefault();
  download('text.txt', `${toInput.value}`);
})

function download(filename, text) {
  let element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  
  element.style.display = 'none';
  document.body.appendChild(element);
  
  element.click();
  
  document.body.removeChild(element);
}