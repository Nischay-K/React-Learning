// function Greet() {
    // return <h1>Hello Nischay!!</h1>;
// }
 
// const Greet = () => {
    // return <h1>Hello Nischay!!</h1>;
// }

// Named Export -> Here we have to export with the same file name that is Greet
// Destructing the props -> 
// 1. Method - 1
// const Greet = ({name , heroName}) => {
    // return (
        // <div>
            // {/* <h1>Hello {name} a.k.a {heroName}</h1> */}
            // {props.children}
        // {/* </div> */}
    // )
// }

// 2. Method - 2
const Greet = props => {
    const {name , heroName} = props            
    return (                                      
        <div>                                     
            <h1>Hello {name} a.k.a {heroName}</h1>
            {/* {props.children} */}              
        </div>                                    
    )                                             
}                                                 



// Default export
export default Greet;
