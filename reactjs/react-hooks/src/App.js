import './App.css'
import UseStateEx1 from './components/useState/UseStateEx1'
import UseStateEx2 from './components/useState/UseStateEx2'
import UseReducerEx1 from './components/useReducer/UseReducerEx1'
import UseReducerEx2 from './components/useReducer/UseReducerEx2'
import UseEffectEx1 from './components/useEffect/UseEffectEx1'
import UseEffectEx2 from './components/useEffect/UseEffectEx2'
import UseEffectEx3 from './components/useEffect/UseEffectEx3'
import UseEffectEx4 from './components/useEffect/UseEffectEx4'
import UseEffectEx5 from './components/useEffect/UseEffectEx5'
import UseLayoutEffectEx1 from './components/useLayoutEffect/UseLayoutEffect.Ex1'
import UseRefEx1 from './components/useRef/UseRefEx1'
import UseRefEx2 from './components/useRef/UseRefEx2'
import UseRefEx3 from './components/useRef/UseRefEx3'
import UseImperativeHandleEx1 from './components/useImperativeHandle/UseImperativeHandleEx1'
import UseImperativeHandleEx2 from './components/useImperativeHandle/UseImperativeHandleEx2'
import UseContextEx1 from './components/useContext/UseContextEx1'
import UseMemoEx1 from './components/useMemo/UseMemoEx1'
import UseMemoEx2 from './components/useMemo/UseMemoEx2'

import Ex1 from './components/Ex1'


function App() {
  return (

    <div className="App">
      <Ex1/>
      <h1>React Hook in Action</h1>
      <h2>useState</h2>
      <p>
        useState: Allows you to add and manage state variables 
        in a component. It takes an initial value and returns 
        the current state and a function to update it. 
      </p>
      <UseStateEx1/>
      <UseStateEx2 />





      <h2>useReducer</h2>
      <p>
        useReducer: An alternative to useState for managing 
        complex state logic using a reducer funtion.
      </p>
      <UseReducerEx1/>
      <UseReducerEx2/>

      



      <h2>useEffect</h2>
      <p>
        useEffect: Enables you to perform side effects in your 
        component, like fetching data or updating the DOM, after 
        rendering. It takes a function to run and an optional array 
        of dependencies.

        - <b> useEffect runs aschronously after the DOM changes have 
          been commited to screed. It does not block the browser's painting 
          and layout operations. Which can result in a flicker or dely if you 
          need to make immediate changes to the DOM after a render. 
        </b>

        - If you need to interact with the DOM immediately after a render 
        and before it's painted on the screen. BUt if timing doesn't matter 
        and you are making non-critical updates, then useEffect is generally 
        sufficient.

        <br/>
        <b> state change - rerender - screen upddated - useEffect runs </b>
        <br/>
        - One will mostly use useEffect because, if one is fetching data from 
          an API, one would prefer the request doesn't block screen update 
      
      </p>
      <UseEffectEx1 />
      <UseEffectEx2 />
      <UseEffectEx3 />
      <UseEffectEx4 />
      <UseEffectEx5 />


      <h2>useLayoutEffect</h2>
      <p>
        useLayoutEffect is similar to useEffect, but it
        synchronously runs when you need to make sure some
        code runs immediately after the DOM is updated. 
        
        - <b> useLayoutEffect run synchronously after the DOM 
          mutations but before the browser has a chance to paint 
          i.e. It can be use when one needs to perform an immediate, 
          synchronous actions after a render and before the user sees 
          changes. 
        </b>
        <br /> 
        <br /> 
        
        <b> state change - rerender - useLayoutEffect - screen upddated </b>
      </p>
      <UseLayoutEffectEx1 />
    


      <h2>useRef</h2>
      <p>
        useRef a mutable reference to a value that persists across renders, 
        without causing re-renders. It's often used for accessign DOM elements. 
      </p>
      <UseRefEx1 />
      <UseRefEx2 />
      <UseRefEx3 />
    
      
    
      <h2>useImperativeHandle</h2>
      <p>
        useImpertativeHandle allow one to determine which property will be exposed 
        when using <b> forwardRef </b> function. It is primarily used in situations 
        where you want to allow parent components to interact with a child component's 
        instance directly.
      </p>
      <p>
        1. When one create a child component that uses <b>forwardRef</b>, one can 
        define what propertise and methods are exposed on the ref instance. 
      </p>
      <p>
        2. By using <b>useImperativeHandele</b>, on can specify which values or 
        functions from ones component should be accessible through the ref.
      </p>
      <p>
        3. This allows the parent component to call methods or access properties 
        on the child component's instance using the ref.
      </p>
      <UseImperativeHandleEx1 />
      <UseImperativeHandleEx2 />

      
      <h2>useContext</h2>
      <p>
        Provides access to the context of the parent component, allowing one 
        to share data down the component tree with prop drilling.
        i.e. is used to share a cetain value between the components in an 
        application, without having to pass it down as a prop.
      </p>
      <UseContextEx1 /> 

    

      <h2>useMemo </h2>
      <p>
        Memoizes (caches) the result of a function, preventing unncessary
        calculations on every render. It takes a function and an array of
        dependencies. <br/> 
        i.e It memoizes values between renders.
      </p>
      <UseMemoEx1/> 
      <UseMemoEx2 /> 
      
      <h2> useCallback </h2> 
      <p> 
        Memoizes a function, useful to prevent re-creating functions on each 
        render, optimizing performance. It takes a function and an array of 
        dependencies
      </p>
      

    </div>   



    
    
    
  )
}

export default App
