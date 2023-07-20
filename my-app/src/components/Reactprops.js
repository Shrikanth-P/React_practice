import React from "react";

function Reactprops(props) {
    
    return(
     <div>
        <h1>{props.name} from react property {props.value}</h1>
        <p>{props.children}</p>
     </div>
    )
}
export default Reactprops


