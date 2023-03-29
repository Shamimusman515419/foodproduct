import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Meal from './Component/Meal/Meal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <Meal></Meal>
    </div>
  )
}

export default App
