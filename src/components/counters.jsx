import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterIdToDelete => {
    console.log("this is the handle delete method");
    const countersUponDelete = this.state.counters.filter(
      counter => counter.id !== counterIdToDelete
    );
    this.setState({ counters: countersUponDelete });
  };

  handleIncrement = counterToIncrement => {
    const countersUponIncrement = [...this.state.counters];
    const index = countersUponIncrement.indexOf(counterToIncrement)
    // countersUponIncrement[index] = {...counterToIncrement}
    countersUponIncrement[index].value++;
    this.setState({ counters: countersUponIncrement });
  };

  resetCounters = () => {
    const countersUponReset = [...this.state.counters];
    countersUponReset.map(c => (c.value = 0));

    this.setState({ counters: countersUponReset });
  };

  render() {
    if (this.state.counters.length === 0) return <p>No more counters!</p>;

    return (
      <div>
        <button onClick={this.resetCounters}>Reset</button>

        {this.state.counters.map(counter => (
          // (<Counter key = {counter.id} counter = {counter} notchildren = {9} selected={true}>
          //     <h4>Counter #: {counter.id} </h4>
          //  </Counter>))}

          <Counter
            key={counter.id}
            counter={counter}
            onClickingDeleteFunctionToCall={this.handleDelete}
            onClickingIncrementFunctionToCall = {this.handleIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
