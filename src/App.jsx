// UseState Components
import { HooksApp } from './components/useState/HooksApp'
import { CounterApp } from './components/useState/CounterApp'
import { CounterWithCustomHook } from './components/useState/CounterWithCustomHook'


// useEffect Components
import { SimpleForm } from './components/useEffect/SimpleForm'
import { FormWithCustomHooks } from './components/useEffect/FormWithCustomHooks'

// Styles
import './App.css'
import { MultipleCustomHooks } from './components/useFetch/MultipleCustomHooks'

function App() {
  return (
    <>
      <div className="App">
        {/* <HooksApp/> */}
        {/*<CounterApp />*/}
        {/*<CounterWithCustomHook /> */}

        {/* <SimpleForm /> */}
        {/* <FormWithCustomHooks /> */}

        <MultipleCustomHooks />
      </div>
    </>
  )
}

export default App
