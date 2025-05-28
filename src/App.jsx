// import './App.css'

function App() {

  return (
    <>
      <div className="h-[100vh] flex flex-col items-center justify-between bg-red-500">
        <h1 className="text-3xl font-bold mt-6">Background Changer App</h1>
        <div className="buttons-container mb-10 bg-white py-2 px-4 rounded-lg flex gap-5">
          <button className="bg-red-500 text-2xl px-8 py-2 rounded-lg">Red</button>
          <button className="bg-green-500 text-2xl px-8 py-2 rounded-lg">Green</button>
          <button className="bg-blue-500 text-2xl px-8 py-2 rounded-lg">Blue</button>
        </div>
      </div>
    </>
  )
}

export default App
