import React, { Component } from "react";

class Counter extends Component {
  state = { count: this.props.counter.value };
  render() {
    return (
      <div>
        <button onClick = {this.handleReset} className="btn-primary btn-sm m-2">Reset</button>
        <span style={{ fontSize: 20 }} className={this.getBadgeColor()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          style={{ fontSize: 20 }}
          className="btn btn-dark btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={this.handleDecrement}
          style={{ fontSize: 20 }}
          className="btn btn-info btn-sm m-2"
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          style={{ fontSize: 20 }}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  getBadgeColor() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    return this.state.count === 0 ? "zero" : this.state.count;
  }
}

export default Counter;
