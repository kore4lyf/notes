import { useRef, forwardRef, useImperativeHandle } from "react"

function UseImperativeHandleEx2() {
  const inputRef = useRef()

  return (
    <div>
      <h3>Example 2: </h3>
      <p>
        Here <b>useImperativeHandle</b> is used to expose(constrain / define) the events 
        that can be performed on a child ref from its parent.
      </p>
      <FancyInput ref={inputRef} />
      <button onClick={() => inputRef.current.focusAndBlur()}>Focus</button>
    </div>
    
  )
}


const FancyInput = forwardRef((props, fowardedRef) => {
  const localRef = useRef()
  useImperativeHandle(fowardedRef, () => {
    return {
      focusAndBlur: () => {
        localRef.current.focus()
        setTimeout(() => {
          localRef.current.blur() 
          localRef.current.style.border = '2px solid red'
        })
      }
    }
  })

    // fowardedRef can be used directly instead of defining local ref
    // if useImperativeHandle is not used 
  return <input ref={ localRef } /> 
})


export default UseImperativeHandleEx2