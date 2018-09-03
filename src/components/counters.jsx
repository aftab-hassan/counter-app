import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {counters, onClickReset, onClickDelete, onClickIncrement, onClickDecrement} = this.props

    // if (this.props.counters.length === 0) return <p>No more counters!</p>;
    if (counters.length === 0) return <p>No more counters!</p>;

    return (
      <div>
        {/* <button onClick={this.props.onClickReset}>Reset</button>
         */}
        <button onClick={onClickReset}>Reset</button>

        {/* {this.props.counters.map(counter => (
          // (<Counter key = {counter.id} counter = {counter} notchildren = {9} selected={true}>
          //     <h4>Counter #: {counter.id} </h4>
          //  </Counter>))}

          <Counter
            key={counter.id}
            counter={counter}
            onClickingDeleteFunctionToCall={this.props.onClickDelete}
            onClickingIncrementFunctionToCall = {this.props.onClickIncrement}
          />
        ))} */}
        {counters.map(counter => (
          // (<Counter key = {counter.id} counter = {counter} notchildren = {9} selected={true}>
          //     <h4>Counter #: {counter.id} </h4>
          //  </Counter>))}

          <Counter
            key={counter.id}
            counter={counter}
            onClickingDeleteFunctionToCall={onClickDelete}
            onClickingIncrementFunctionToCall = {onClickIncrement}
            onClickingDecrementFunctionToCall = {onClickDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
