import React, { Component } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Title from "./components/Title";
import Button from "./components/Button"


class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Title name="Search" />
        <form>
          <Input name="topic" placeholder="Topic (required)" />
          <Input name="startYear" placeholder="Start Year (Optional)" />
          <Input name="endYear" placeholder="End Year (required)" />
          <Button />
        </form>
      </div>
    );
  }
}
export default App;
