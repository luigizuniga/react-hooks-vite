// UseState Components
import { HooksApp } from './components/useState/HooksApp'
import { CounterApp } from './components/useState/CounterApp'
import { CounterWithCustomHook } from './components/useState/CounterWithCustomHook'


// useEffect Components
import { SimpleForm } from './components/useEffect/SimpleForm'
import { FormWithCustomHooks } from './components/useEffect/FormWithCustomHooks'

// useFetch
import { MultipleCustomHooks } from './components/useFetch/MultipleCustomHooks'

//useRef
import { FocusScreen } from './components/useRef/FocusScreen'

// Styles
import './App.css'


function App() {
  return (
    <>
      <div className="App">
        {/* <HooksApp/> */}
        {/*<CounterApp />*/}
        {/*<CounterWithCustomHook /> */}

        {/* <SimpleForm /> */}
        {/* <FormWithCustomHooks /> */}

        {/* <MultipleCustomHooks /> */}

        <FocusScreen/>
      </div>
    </>
  )
}

export default App
