import React from "react";
import MountingListB from "./MountingListB";
class MountingListA extends React.Component{
    constructor(props){//Lifecycle Mounting
        super(props)
        this.state={
            name : "shri"
        }
     console.log("ListMountA Constructor")
    }
   
    static getDerivedStateFromProps(props,state){
        console.log("ListMountA getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("listMountA componentDidMount")
    }
render(){
    console.log("ListmountA render")
return(
<>
<p>ListMounting A</p>
<MountingListB/>
</>
)
}   
}
export default MountingListA;