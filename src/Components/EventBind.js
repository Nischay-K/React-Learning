import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello"
      }
    //   this.clickHandler = this.clickHandler.bind(this) -> Used for the method - 3
    }

    // clickHandler() {
        // this.setState({
            // message: 'Good Bye take care!!'
        // })  
    // }

// This is for the Class Components
clickHandler = () => {
    this.setState({
        message : "GoodBye Take Care!!"
    })
}
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* Methods that are used for binding */}
        {/* <button onClick = {this.clickHandler.bind(this)}>Click On</button> -> Method - 1*/}
        {/* <button onClick = {() => this.clickHandler()}>Click On</button> Method - 2*/}
        {/* <button onClick = {this.clickHandler}>Click On</button> -> Method - 3*/}
        <button onClick = {this.clickHandler}>Click On</button>
      </div>
    )
  }
}

export default EventBind
