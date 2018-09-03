import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   imageUrl: "https://picsum.photos/200",
  //   tags: ["tag1", "tag2", "tag3"]
  // };

  styles = {
    fontSize: 1,
    fontWeight: "bold"
  };

  render() {
    // console.log("props == ", this.props);

    return (
      <div className= "row">
      
        <div className = "col-1">
          <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        </div>

        <div>
          <button
              // onClick={() => this.handleIncrement({ id: 1 })}
              onClick = { () => this.props.onClickingIncrementFunctionToCall(this.props.counter)}
              className="btn btn-secondary btn-sm m-4"
            >
              +
          </button>
          <button onClick = { () => this.props.onClickingDecrementFunctionToCall(this.props.counter)} 
          className = "btn btn-secondary btn-sm m-2"
          disabled = {this.props.counter.value === 0 ? 'disabled' : ''}
          >
            -
          </button>
          {/* <button onClick = {this.props.counter.onClickingDeleteFunctionToCall} className = 'btn btn-danger btn-sm m-2'>Delete</button> */}
          <button
            onClick={() =>
              this.props.onClickingDeleteFunctionToCall(this.props.counter.id)
            }
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
          {/* <img src={this.state.imageUrl} alt="" /> */}
          {/* <span style={this.styles} className = {this.getBadgeClass()}>{this.formatCount()}</span> */}
          {/* <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button> */}
          {/* <ul>
              { this.state.tags.map( tag => <li key={tag}>{tag}</li> ) }
          </ul> */}
          {/* <div>
              {this.renderTags()}
          </div> */}

          {/* {this.props.children} */}
          {/* <h4>{this.props.counter.notchildren}</h4> */}
      </div>
    );
  }

  // handleIncrement = product => {
  //   //   this.state.value++;
  //   console.log(product);
  //   this.setState({ value: this.state.value + 1 });
  // };

  // renderTags() {
  //   if (this.state.tags.length === 0) return "There are no tags!";

  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? <h1>Zero</h1> : <h1>{value}</h1>;
  }
}

export default Counter;
