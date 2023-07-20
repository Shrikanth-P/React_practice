import React,{Component} from "react";
//rce

class Classclick extends Component{
   clickHandler(){
    console.log("BUTTON CLICKED")
   }
    render(){
        return(
            <div>
                <button onClick={this.clickHandler}>Click me</button>
            </div>
        )
    }
}

export default Classclick