// import './App.css'

import { useState } from "react"

function App() {
  const [color, setColor] = useState("bg-red-500")
  return (
    <>
      <div className={`h-[100vh] flex flex-col items-center justify-between ${color}`}>
        <h1 className="text-3xl font-bold mt-6 bg-white p-4 rounded-md">Background Changer App</h1>
        <div className="buttons-container mb-10 bg-white py-2 px-4 rounded-lg flex gap-5">
          <button className="bg-red-500 text-2xl px-8 py-2 rounded-lg" onClick={() => setColor("bg-red-500")}>Red</button>
          <button className="bg-green-500 text-2xl px-8 py-2 rounded-lg" onClick={() => setColor("bg-green-500")}>Green</button>
          <button className="bg-blue-500 text-2xl px-8 py-2 rounded-lg" onClick={() => setColor("bg-blue-500")}>Blue</button>
        </div>
      </div>
    </>
  )
}

export default App
