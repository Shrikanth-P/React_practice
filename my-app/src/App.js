import React from "react";
import "./App.css";
import MountingListA from "./components/MountingListA";
//import Listrender from "./components/Listrender";
//import Conditionalrender from './components/Conditionalrender';
//import ParentComp from './components/ParentComp';
//import Classclick from './components/Classclick';
//import Functionclick from './components/Functionclick';
// import Counter from './components/Counter';
// import Stateclass from './components/Stateclass';
//import Reactprops from './components/Reactprops'
// import Mycomp from './components/Greet';
// import Welcome from './components/Welcome';
// import Hola from './components/Hello'

// import {Greet} from './components/Greet' // named export

class App extends React.Component {
  render() {
    return (
      // <div className='App'>
      //  <Mycomp name="shri"/>
      // <Welcome name="sai" val="12345"/>
      // <Hola/>
      // </div>
      // <div className='App'>
      // {/* <Reactprops name="shri" value="21">
      //   qwerty
      //  <h1> hi shri bro </h1>
      // </Reactprops>
      // <Reactprops name="ravi" value="12"/>
      // <Reactprops name="sai" value="10">
      //   samosa
      // </Reactprops> */}
      //<Stateclass></Stateclass>
      // <Counter></Counter>
      // </div>
      //<Functionclick/>
      //<Classclick></Classclick>
      //<ParentComp></ParentComp>
      //<Conditionalrender></Conditionalrender>
      //<Listrender />
      <MountingListA/>
    );
  }
}

export default App;
