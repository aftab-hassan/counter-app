import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar'
import Counters from './components/counters'

class App extends Component {
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

  handleDecrement = (counterToDecrement) => {
    const countersUponDecrement = [...this.state.counters];
    const index = countersUponDecrement.indexOf(counterToDecrement)
    countersUponDecrement[index].value--;
    this.setState( {counters:countersUponDecrement} );
  }

  handleReset = () => {
    const countersUponReset = [...this.state.counters];
    countersUponReset.map(c => (c.value = 0));

    this.setState({ counters: countersUponReset });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar counters = {this.state.counters.filter(counter => counter.value > 0)}/>
        <main className="container">
          <Counters counters = {this.state.counters} onClickDecrement = {this.handleDecrement} onClickReset = {this.handleReset} onClickIncrement = {this.handleIncrement} onClickDelete = {this.handleDelete} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
