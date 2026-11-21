import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log('Button Clicked')
    }

     
  return (
    <div>
        {/* Here the Event Handler should be a function not a function call like clickHandler()!! */}
      <button onClick = {clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick
