import React from 'react'


// Where the props is used as the method!!
// function ChildComponent(props) {
//   return (
    // <div>
    //   {/* <button onClick = {props.greetHandler}>Greet Parent!</button> */}
    // {/* </div> */}
//   )
// }


// Sent through the parameters -> Here we use the arrow methods!!
function ChildComponent(props) {                                   
  return (                                                         
    <div>                                                          
      <button onClick = {() => props.greetHandler('child')}>Greet Parent!</button>
    </div>                                                         
  )                                                                
}                                                                  


export default ChildComponent
