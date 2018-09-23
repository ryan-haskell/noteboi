const startsWith = (piece) => (str) =>
  str && str.indexOf(piece) === 0

const matches = (piece) => (str) =>
  piece === str

const patternStyle = el => ([ class_, conditional ]) =>
  conditional(el.innerText)
    ? el.classList.add(class_)
    : el.classList.contains(class_)
      ? el.classList.remove(class_)
      : undefined

const setClass = p => [
  [ 'h1', startsWith('# ') ],
  [ 'h2', startsWith('## ') ],
  [ 'h3', startsWith('### ') ],
  [ 'h4', startsWith('#### ') ],
  [ 'h5', startsWith('##### ') ],
  [ 'h6', startsWith('###### ') ],
  [ 'blockquote', startsWith('> ') ],
  [ 'hr', matches('---') ]
].map(patternStyle(p))

const setClasses = el => [ ...el.children ].map(setClass)
const elements = {
  title: document.getElementById('title'),
  caption: document.getElementById('caption'),
  date: document.getElementById('date'),
  editor: document.getElementById('editor')
}

const syncWithLocalStorage = el => {
  window.localStorage.setItem('notes', el.innerHTML)
  window.localStorage.setItem('title', elements.title.value)
}

const onUpdate = el => {
  setClasses(el)
  syncWithLocalStorage(el)
}

const initializeEditor = (el) => {
  el.setAttribute('contenteditable', 'true')
  el.innerHTML += window.localStorage.getItem('notes') || '<p><br/></p>'
  elements.title.value = window.localStorage.getItem('title') || ''
  document.addEventListener('keyup', e => e.target === el && onUpdate(el))
  onUpdate(el)
}

const initializeServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
  }
}

initializeEditor(elements.editor)
initializeServiceWorker()
