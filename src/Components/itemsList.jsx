import React, { Component } from "react";
class ItemsList extends Component {
  state = {
    items: [
      {
        id: 0,
        name: "cycle",
        value: 100
      },
      {
        id: 1,
        name: "watch",
        value: 250
      }
    ]
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.items.map(item => (
            <li>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ItemsList;
