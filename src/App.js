import React, { Component } from "react";
import "./App.css";
import "./nav.css";
import { Card } from "./Card";
import { robots } from "./robots";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Robofriends</h1>
        <div>
          {robots.map((data) => {
            return <Card key={data.id} robot={data} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
