import React, { Component } from "react";
import "../index.css";

import { CardList } from "../Components/CardList";
import { SearchBox } from "../Components/SearchBox";
import { Scroll } from "../Components/Scroll";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allRobots: [],
      searchInput: "",
    };
    this.updateSearchInput = this.updateSearchInput.bind(this);
  }
  updateSearchInput(data) {
    this.setState({ searchInput: data });
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ allRobots: data });
      });
  }

  render() {
    const { allRobots, searchInput } = this.state;
    const filteredRobot = allRobots.filter((robot) => {
      return robot.username.toLowerCase().includes(searchInput.toLowerCase());
    });

    return (
      <div className="tc">
        <h1 className="f1">Robofriends</h1>
        <SearchBox getSearchInput={this.updateSearchInput} />
        <Scroll>
          <CardList
            robotsList={
              filteredRobot.length > 0 ? filteredRobot : this.state.allRobots
            }
            searchInputText={this.state.searchInput}
          />
        </Scroll>
      </div>
    );
  }
}

export default App;
