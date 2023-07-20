import React from "react";

class Stateclass extends React.Component {
    constructor(){
        super()
        this.state={
            message : 'Hi Welcome to React Learning Shrikanth'
        }
        // this.changeMethod = this.changeMethod.bind(this)
    }
   
    // changeMethod() {
    //    this.setState({
    //     message : "Thank you"
    //    })
    // }

    changeMethod = () => {
        this.setState({
            message : "Good Bye!"
        })
    }
  
    render(){
        return(
        <div>
            <h1>{this.state.message}</h1>
            {/* <button onClick={this.changeMethod().bind(this) }>submit</button> */}
            {/* <button onClick={ () => this.changeMethod() }>submit</button> */}
            <button onClick={this.changeMethod}>submit</button>
        </div>
        );
    }
}

export default Stateclass