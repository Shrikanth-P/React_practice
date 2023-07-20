import React from "react";
//rfce

function Functionclick(){
    function Clicked(){
        console.log("button cliked")
    }
    return(
        <div>
            {/* <button onClick={Clicked}>click</button> 
            above one was correct way to call click events */}
            <button onClick={Clicked()}>click</button> 
             {/* function clicked called without click the button because it is function call*/}
        </div>
    )
}
export default Functionclick