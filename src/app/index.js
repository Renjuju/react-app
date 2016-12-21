import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
  render() {
    let user = {
      name: "Person",
      hobbies: ["Sports", "Other stuff", "ReactJs"]
    };
    return (
      <div>
        <Header/>
        <div className="container">
          <div className="row">
              <div className="col-xs-10 col-xs-offset-1">
                <Home name={"Renju"} age={22} user={user}/>
              </div>
          </div>
        </div>
      </div>

    );
  }
}
render(<App/>, window.document.getElementById("app"));
