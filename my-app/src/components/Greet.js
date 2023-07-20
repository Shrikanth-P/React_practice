import React from "react";

function Greet({name}){
   // const {name} = props
    return <h1>Hello {name}</h1>;
}

//const Greet = ( ) => <h1>Hello !</h1>;
export default Greet  // we import in app component with different name 

//export const Greet = ( ) =>  <h1>Hello shri</h1> ; //named export must and should call same name

 