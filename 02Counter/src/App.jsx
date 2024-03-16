import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    // counter += 1
    // console.log(counter)
    // The above code will increase the value of counter by 1 but the UI Updation of counter will not be executed as it is in hands of react library, for this we use hook useState
    if (counter < 20) setCounter(counter+1)
    // This will not only update the value of counter but also update UI
  }

  const removeValue = () => {
    if (counter > 0) setCounter(counter-1)
  }

  const Message = () => {
    if (counter === 0) {
      return (
        <h2>Cannot decrease counter past 0.</h2>
      )
    } else if (counter === 20) {
      return (
        <h2>Cannot increase counter past 20.</h2>
      )
    }
  }

  return (
    <>
      <h1>Chai aur code</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}
      >Add value: {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value: {counter}</button>
      <Message />
    </>
  )
}

export default App

// useState sends updates in batches so, using multiple setData() at the same time will result in updation being executed just once
// to change value use this:
// setData((previousCounter) => previousCounter+1)