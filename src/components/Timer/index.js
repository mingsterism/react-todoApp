import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props)
  }

  startTimer(){
    console.log("starting")
    
  }

  render() {
    return (
      <div>
        <p>{this.props.counter}</p>
        <button start onClick={this.startTimer}> Start </button>
      </div>
    );
  }
}

export default Timer;