import { useState } from 'react'
import reactLogo from './assets/react.svg'

import viteLogo from '/vite.svg'
import './App.css'
import LoginCard from './cards/LoginCard'
import Heropage from './cards/Heropge'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Heropage />
    </>
  )
}

export default App
