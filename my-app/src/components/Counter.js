import React,{Component} from "react";

class Counter extends Component{
    constructor(props){
        super(props)
        this.state={
            count : 0
        }
    }

    increment(){
        // this.state.count = this.state.count + 1
        // console.log(this.state.count)  //it updates in console not in body of html
       
    //     this.setState({
    //         count : this.state.count + 1
    //     },()=>{
    //         console.log("callbacked value",this.state.count)
    //     })   // we have use prev state for it

    //     console.log(this.state.count)
    // }  // because react make multiple setstate method to group into one method to smooth perform of react UI
    this.setState((prevstate) => ({
    //count : prevstate.count + 1
    }))
}
 
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render(){
        return(
            <div>
                <h1>counter : {this.state.count}</h1>
                <button onClick={() => this.incrementFive() }>Increment</button>
            </div>
        )
    }
}
export default Counter