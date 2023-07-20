import React from "react";

class Welcome extends React.Component{
   
    render(){
        const {name,val} = this.props // destructor
        // const {state1,state2} = this.state
        return(
            <div>
            <h1>Welcome Back {name}!</h1>
            <p> Lorem {val}</p>
            </div>
        );
    }
}

export default Welcome;