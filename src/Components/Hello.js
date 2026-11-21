// Here we understand the JSX power with and without 

import React from 'react'

// With JSX
// const Hello = () => {
    // return (
        // <div className = 'dummyClass'>
            // {/* <h1>Hello Nischay, Welcome to the React Journey</h1> */}
        // {/* </div> */}
    // )
// }

// Without JSX
const Hello = () => {
    return React.createElement('div' , {id : 'hello' , className : 'dummyClass'} , React.createElement('h1' , null , 'Hello Nischay'))
}

// Then we need to export the above code
export default Hello