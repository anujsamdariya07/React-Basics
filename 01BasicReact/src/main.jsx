import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// React DOM also known as Virtual DOM compares itslef with the DOM of the website provided by the browser and injects only that part of the code which is not present in web DOM. 
ReactDOM.createRoot(document.getElementById('root'))
.render(
  <App />
)
// Witht the help of JSX we can render HTML elements, we can also make custom tags such as <App />