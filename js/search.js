const f = document.getElementById('form');
const q = document.getElementById('query');
const google = 'https://www.google.com/search?q=';
const site = '';

function submitted(event) {
  event.preventDefault();
  const url = google + q.value;
  const win = window.open(url, '_self');
  win.focus();
}

f.addEventListener('submit', submitted);