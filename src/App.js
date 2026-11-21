import './App.css';
// Here we need to import the Greet function
import Greet from './Components/Greet';
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'
import Message from './Components/Message'
import Counter from './Components/Counter'
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import StyleSheets from './Components/StyleSheets';
import Inline from './Components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'

// The styles module cannot be used in the inline part and it is more efficient!!!

function App() {
  return (
    <div className="App">
      <h1 className = 'error'>Error</h1>
      <h1 className = {styles.success}>Success</h1>
      {/* <Inline /> */}
      {/* <StyleSheets primary = {true} /> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <ClassClick/> */}
      {/* <FunctionClick/> */}
      {/* <Greet name = "Bruce" heroName = "Batman"></Greet> */}
      {/* <Counter/> */}
      {/* <Message/> */}
      {/* Give the tag form */}
      {/* <Greet></Greet> */}
      {/* <Greet name = "Bruce" heroName = "Batman"> */}
        {/* <p>This is a children props!!</p> */}
      {/* </Greet> */}
      {/* <Greet name = "Diana" heroName = "Wonder Woman"> */}
        {/* <button>Action</button> */}
      {/* </Greet> */}
      {/* <Greet name = "Clerk" heroName = "Superman"/> */}
      {/* <Greet name = "Tony" heroName = "Iron Man"/> */}
      {/* <Welcome name = "Bruce" heroName = "Batman"/> */}
      {/* <Welcome name = "Diana" heroName = "Wonder Woman"/> */}
      {/* <Welcome name = "Clerk" heroName = "Superman"/> */}
      {/* <Welcome name = "Tony" heroName = "Iron Man"/> */}
      {/* <Hello/> */}
      
    </div>
  );
}

export default App;
