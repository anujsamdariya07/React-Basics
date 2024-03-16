// useRef is used to take reference of something
import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // We need to make a variable for useRef()
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    // We can do this without taking the refernce as well but we use useRef() just for the sake of optimizing so that the user knows that the text has been copied by displaying it as selected
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0, 3) --> this will select only the specified part of the password
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passwordGenerator = useCallback(() => {
    let password = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numberAllowed) str += '0123456789'
    if (characterAllowed) str += '`~!@#$%^&*()_+-={}[]:;<,>.?/|'

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      password += str.charAt(char)
    }

    setPassword(password)
  }, [length, numberAllowed, characterAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, setPassword])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg my-8 px-4 text-orange-500 bg-gray-700 pb-5'>
        <h1 className='text-white'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 rounded'
            placeholder='Password'
            readOnly
            ref={passwordRef}
            // This will give refernce to passwordRef of password input
          />
          <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(event) => setLength(event.target.value)}
            />
            <label htmlFor="">Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={numberAllowed}
            id='number-input'
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
            
            />
            <label htmlFor="number-input">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={characterAllowed}
            id='character-input'
            onChange={() => {
              setCharacterAllowed((prev) => !prev)
            }}
            
            />
            <label htmlFor="character-input">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
