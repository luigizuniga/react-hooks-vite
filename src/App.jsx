import { HooksApp } from './components/useState/HooksApp'
import { CounterApp } from './components/useState/CounterApp'
import { CounterWithCustomHook } from './components/useState/CounterWithCustomHook'

import './App.css'

function App() {
  return (
    <>
    <div className="App">
       <HooksApp/>
       <CounterApp />
       <CounterWithCustomHook />
    </div>
    </>
  )
}

export default App
