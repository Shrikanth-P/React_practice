import React,{Component} from "react";
import ChildComp from "./Childcomp";

class ParentComp extends Component{
    constructor(){
        super()
        this.state={
            parentName : 'Parents'
        }
        this.greet = this.greet.bind(this)
    }

    greet(childName){
    alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    render(){
        return(
            <div>
             <ChildComp greeting={this.greet}></ChildComp>
            </div>
        )
    }
}

export default ParentComp