import React, { Component } from "react";
// import { asset, NativeModules, VrButton } from "react-360";
// const { AudioModule } = NativeModules;
class Counter extends Component {
  // need to pass props as a constructor for child component
  constructor(props) {
    super(props);
    this.getIncrement = this.getIncrement.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }
  //   state = {
  //     value: this.props.counter.value,
  //     id: this.props.counter.id
  //   };
  styles = {
    color: "black",
    backgroundColor: "white"
  };

  render() {
    let classes = this.getBadgeClasses();
    return (
      <div>
        <div
          style={{
            fontSize:
              this.props.counter.value === 0
                ? 10
                : 10 * this.props.counter.value
          }}
        >
          <span className="badge badge-secondary">
            {this.props.counter.name}
          </span>
        </div>
        <div>${this.props.counter.cost}</div>
        <span style={this.styles} className={classes}>
          {this.getCount()}
        </span>
        {/* since getIncrement is just a reference , js wont know this 
        if you want to know this , you need to bind at the constructor level */}
        <button onClick={this.onIncrement} className="btn btn-success ">
          Yum
        </button>
        <button onClick={this.onDecrement} className="btn btn-danger ">
          Nop
        </button>
        <div>
          Item Cost:{" "}
          <span className="badge badge-pill badge-light">
            ${this.props.counter.cost * this.props.counter.value}
          </span>
        </div>
        <audio id="myTune">
          <source src="bite.mp3" />
        </audio>
      </div>
    );
  }

  bite() {
    console.log("bite");
    // AudioModule.playEnvironmental({
    //   source: asset("bite.mp3"),
    //   volume: 0.3 // play at 3/10 original volume
    // });
  }
  onIncrement() {
    this.props.onIncrement(this.props.counter);
  }
  onDecrement() {
    this.props.onDecrement(this.props.counter);
    console.log("dec");
  }
  onDelete() {
    this.props.onDelete(this.props.counter.id);
  }

  getIncrement = product => {
    // react does now know when state changes , need to explicitly tell react
    this.setState({ value: this.props.counter.value + 1 });
  };
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value ? "secondary" : "warning";
    return classes;
  }

  getCount() {
    var converter = require("number-to-words");
    var obj;

    const { value } = this.props.counter;
    let estyle = {
      color: "red"
      // fontSize: value === 0 ? 10 : value * 10
    };

    obj = <h3 style={estyle}>{converter.toWords(value)}</h3>;

    return obj;
  }
}

export default Counter;
