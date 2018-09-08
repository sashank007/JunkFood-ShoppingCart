import React, { Component } from "react";
import bike from "./bike.jpg";
import burger from "./burger.gif";
import iceCream from "./ice_cream.gif";
import pizza from "./pizza.gif";
import donut from "./donut.gif";
class Images extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    const { counter } = this.props;
    console.log(this.props.counter[0].value);

    return (
      <div style={{}}>
        <img
          src={donut}
          style={{
            height: counter[0].value === 0 ? 100 : 100 * counter[0].value,
            display: "block",
            marginBottom: 50
          }}
        />
        <img
          src={burger}
          style={{
            height: counter[1].value === 0 ? 100 : 100 * counter[1].value,
            display: "block",
            marginBottom: 50
          }}
        />
        <img
          src={iceCream}
          style={{
            height: counter[2].value === 0 ? 100 : 100 * counter[2].value,
            marginBottom: 50,
            display: "block"
          }}
        />
        <img
          src={pizza}
          style={{
            height: counter[3].value === 0 ? 100 : 100 * counter[3].value,
            display: "block"
          }}
        />
      </div>
    );
  }
}

export default Images;
