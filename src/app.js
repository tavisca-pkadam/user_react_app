import React from "react";
import ReactDOM from "react-dom";
import {Header} from "./components/Header"

import {Content} from "./components/Content"
import {Footer} from "./components/Footer"



class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("content"));
