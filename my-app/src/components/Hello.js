import React from "react";

function Hello(){
// return ( xml
//   <div>
//     <h1>hello !</h1>  
//   </div>
// )
return React.createElement('div',{id : 'hello' , className : 'app'}, //without xml 
React.createElement('h1',null,'HOLA !')
)

}
export default Hello