import React, { Component } from "react";

class productCard extends Component {
  state = {};
  render() {
    return (
      <div className="shadow relative overflow-hidden p-12 bg-gray-800 bg-gradient-to-r hover:from-green-400 to-blue-500 ">
        <h2 className="text-5xl w-1/2 font-thin leading-tight">
          {this.props.name}
        </h2>
      </div>
    );
  }
}

export default productCard;
