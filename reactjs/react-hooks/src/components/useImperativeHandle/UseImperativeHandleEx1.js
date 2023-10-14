import { useRef, forwardRef } from "react"

function UseImperativeHandleEx1() {
  const inputRef = useRef()

  return (
    <div>
      <h3>Example 1: </h3>
      <FancyInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus}>Focus</button>
    </div>
    
  )
}


const FancyInput = forwardRef((props, forwardedRef) => {
  return <input ref={ forwardedRef } /> 
})


export default UseImperativeHandleEx1