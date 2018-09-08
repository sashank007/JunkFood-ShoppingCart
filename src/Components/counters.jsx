import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    return (
      <div>
        {/* <button onClick={this.props.onAdd} className="btn-primary m-2">
          Add
        </button> */}
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
          />
        ))}
        <br />
        <br />
        <button onClick={this.props.onReset} className="btn btn-dark m-2">
          Check Out
        </button>
      </div>
    );
  }
}

export default Counters;
