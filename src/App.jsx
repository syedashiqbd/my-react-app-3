import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users from './Users'
import Friends from './Friends'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Friends></Friends>
    </div>
    <div>
      <Users></Users>
    </div>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      <h1>React</h1>
      </div>
      
      
    </>
  )
}

export default App
