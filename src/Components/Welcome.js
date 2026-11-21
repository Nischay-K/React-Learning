// To create a Class Component we need to import
import React , { Component } from 'react'

// Create a class with a render method where the class extends the Component

class Welcome extends Component {
    render(){
        const {name , heroName} = this.props
        // Syntax that is used for the state property
        // const {state1 , state2 , state3 , ......} = this.state
        return <h1>Welcome {name} a.k.a {heroName}</h1>
    }
}

// We need to export the above code so we use:
export default Welcome