import React, { Component } from "react";
import logo from "./logo.svg";
import Counters from "./Components/counters";
import "./App.css";
import NavBar from "./Components/navbar";
import ItemsList from "./Components/itemsList";
import Images from "./Components/images";

class App extends Component {
  state = {
    counters: [
      { id: 0, value: 0, cost: 100, name: "Donut" },
      { id: 1, value: 0, cost: 250, name: "Burger" },
      { id: 2, value: 0, cost: 25, name: "Ice Cream" },
      { id: 3, value: 0, cost: 20, name: "Pizza" }
    ]
  };
  reset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleTotal = () => {
    let total = 0;
    let arr = this.state.counters.map(c => {
      let tot = 0;
      tot += c.value * c.cost;
      return tot;
    });
    for (var i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters]; //clone operator
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = counter => {
    const counters = [...this.state.counters]; //clone operator
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value > 0) {
      counters[index].value--;
      console.log("decrease");
    }
    this.setState({ counters });
    console.log("decrease");
  };

  handleAdd = () => {
    let length = this.state.counters.length;
    let newObj = { id: length, value: 0 };
    // const counters = this.state.counters.push(newObj);
    this.setState({
      counters: [...this.state.counters, newObj]
    });
  };
  handleItemCost = counter => {};
  handleDelete = id => {
    console.log("delete", id);
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters });
  };
  handleImage = counter => {};

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />

        <main className="container">
          {/* controlled component */}
          <div style={{ float: "left" }}>
            <Counters
              counters={this.state.counters}
              onDelete={this.handleDelete}
              onReset={this.reset}
              onAdd={this.handleAdd}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
            />
            <h3>
              Total{" "}
              <span class="badge badge-light">: ${this.handleTotal()}</span>
            </h3>
          </div>
          <div style={{ marginLeft: 750 }}>
            <Images counter={this.state.counters} />
          </div>
        </main>
        {/* <button onClick={this.handleTotal} className="btn btn-primary">
          Get total
        </button> */}

        {/* <button onClick={this.handleReset} className="btn btn-dark m-2">
          Check Out
        </button> */}
      </React.Fragment>
    );
  }
}

export default App;
