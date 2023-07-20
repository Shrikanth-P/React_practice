import React from "react";

class MountingListB extends React.Component{
    constructor(props){//Lifecycle Mounting
        super(props)
        this.state={
            name : "shri"
        }
     console.log("ListMountB Constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("ListMountB getDerivedStateFromProps")
        return null
    }
    componentDidMount(){
        console.log("listMountB componentDidMount")
    }
render(){
    console.log("ListmountB render")
return(
<>
<p>ListMounting B</p>
</>
)
}   
}
export default MountingListB;