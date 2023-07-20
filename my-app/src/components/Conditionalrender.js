import React from "react";

class Conditionalrender extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedin: true,
    };
  }
  render() {
    // if (this.state.isLoggedin) {
    //   return <div>Welcome shri</div>;
    // } else {
    //   return <div>welcome guest</div>;
    // }

    // let message
    // if (this.state.isLoggedin) {
    //   message = <div>welcome shri</div>;
    // } else {
    //   message = <div>welcome guest</div>;
    // }
    // return <div>{message}</div>

    // return this.state.isLoggedin ? (
    //   <div>welcome shri</div>
    // ) : (
    //   <div>welcome guest</div>
    // );

    return this.state.isLoggedin && <div>welcome shri</div>; //short circuit
  }
}
export default Conditionalrender;
