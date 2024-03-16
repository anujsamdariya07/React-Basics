import Chai from './Chai'
import React from 'react'

const CustomReactElement = {
  type: 'a', 
  props: {
      href: 'https://www.google.com', 
      target: '_blank'
  }, 
  children: 'Click me to visit google.'
}

// This is the correct syntax for an object to be used in render() method
const ReactElement = React.createElement(
  'a', 
  {
    href: 'https:// www.google.com', 
    target: '_blank'
  }, 
  'Click me to visit google.'
)

const anotherElement = (
  <a href="https://www.google.com" target='_blank'>Visit Google</a>
)

function App() {
  const username = 'anujsamdariya07'
  
  return (
    <>
    {/* The variable or the expression used inside {} must be an evaluated expression */}
      <h1>Chai au code with vite {username}</h1> 
      <Chai />
    </>

    // CustomReactElement --> this will not run as it is not in the correct syntax that is expected by .render() for an object

    // anotherElement --> this will run correctly

    // ReactElement --> this will run correctly
     
    // <h2>Hello</h2> this will throw error as we can throw only one element with jsx, this one element is known as fragement
  )
}

export default App
