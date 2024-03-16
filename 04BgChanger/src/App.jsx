import { useState } from "react"

function App() {
  const [color, setColor] = useState('grey')
  
  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-2 shadow-xl bg-white px-2 py-2 rounded-2xl">
          <button
          onClick={() => setColor('red')}
          // here, we cannot pass setColor in onClick directly as if we code as onClick={setColor} then we cannot pass values in it. And if we pass it as onClick={setColor('red')} then we are passing the return value of setColor function instead of the function itself. So we pass a function having setColor() inside that function.
          className="outline-none px-4 rounded-full py-1 text-white shadow-lg" style={{backgroundColor: 'red'}}>Red</button>
          <button
          onClick={() => setColor('green')}
          className="outline-none px-4 rounded-full py-1 text-white shadow-lg" style={{backgroundColor: 'green'}}>Green</button>
          <button
          onClick={() => setColor('aliceblue')}
          className="outline-none px-4 rounded-full py-1 text-grey shadow-lg" style={{backgroundColor: 'aliceblue'}}>Blue</button>
          <button
          onClick={() => setColor('yellow')}
          className="outline-none px-4 rounded-full py-1 text-grey shadow-lg" style={{backgroundColor: 'yellow'}}>Yellow</button>
          <button
          onClick={() => setColor('pink')}
          className="outline-none px-4 rounded-full py-1 text-grey shadow-lg" style={{backgroundColor: 'pink'}}>Pink</button>
          <button
          onClick={() => setColor('silver')}
          className="outline-none px-4 rounded-full py-1 text-grey shadow-lg" style={{backgroundColor: 'silver'}}>Silver</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
