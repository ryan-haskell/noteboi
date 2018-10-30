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
  [ 'pre', startsWith('```') ],
  [ 'blockquote', startsWith('> ') ],
  [ 'hr', matches('---') ]
].map(patternStyle(p))

const setClasses = el => [ ...el.children ].map(setClass)
const elements = {
  editor: document.getElementById('editor')
}

const syncWithLocalStorage = el => {
  window.localStorage.setItem('notes', el.innerHTML)
}

const onUpdate = el => {
  setClasses(el)
  syncWithLocalStorage(el)
}

const initializeEditor = () => {
  elements.editor.setAttribute('contenteditable', 'true')
  elements.editor.innerHTML += window.localStorage.getItem('notes') || '<p><br/></p>'
  document.addEventListener('keyup', e =>
    e.target === elements.editor && onUpdate(elements.editor)
  )
  onUpdate(elements.editor)
}

const initializeServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
    })
  }
}

const disableTabbing = e => {
  if (e.code === 'Tab') {
    e.preventDefault()
  }
}

const focusEditor = _ => elements.editor.focus()

const start = _ => {
  initializeEditor()
  initializeServiceWorker()
  document.addEventListener('keydown', disableTabbing)
  setTimeout(focusEditor, 200)
}

start()
