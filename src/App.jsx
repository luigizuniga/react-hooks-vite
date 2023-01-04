// UseState Components
import { HooksApp } from './components/useState/HooksApp'
import { CounterApp } from './components/useState/CounterApp'
import { CounterWithCustomHook } from './components/useState/CounterWithCustomHook'

// useEffect Components
import { SimpleForm } from './components/useEffect/SimpleForm'
import { FormWithCustomHooks } from './components/useEffect/FormWithCustomHooks'

// useFetch Component
import { MultipleCustomHooks } from './components/useFetch/MultipleCustomHooks'

//useRef Component
import { FocusScreen } from './components/useRef/FocusScreen'

//useMemo Components
import { Memorize } from './components/useMemo/Memorize'
import { MemoHook } from './components/useMemo/MemoHook'
import { CallbackHook } from './components/useMemo/CallbackHook'
import { Padre } from './components/useMemo/exampleMemo/Padre'


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

        {/* <FocusScreen/> */}

        {/* <Memorize /> */}
        {/* <MemoHook/>  */}
        {/* <CallbackHook /> */}
        
        <Padre/>

      </div>
    </>
  )
}

export default App
