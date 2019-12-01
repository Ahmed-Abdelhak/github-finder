import React, { Fragment, Component } from "react";
import "./App.css";
import Navbar from "./components/layout/navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title=" Github Finder"></Navbar>
      </div>

      /*
        !without JSX, you will create html elemnts using React.CreatElement('div', {claas:'App'}, React.CreatElement('h1',{class:'null'},'hello world'))
      */
    );
  }
}

export default App;
