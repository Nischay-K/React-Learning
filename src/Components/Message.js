// To create a Class Component we need to import
import React , { Component } from 'react'

// Create a class with a render method where the class extends the Component

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message : 'Welcome Visitor!!'
        }
    }

    changeMessage() {
        this.setState({
            message: "Thank You for Following!!"
        })
    }


    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick = {() => this.changeMessage()}>Subscribe</button>
            </div>
        ) 
    }
}

// We need to export the above code so we use:
export default Message