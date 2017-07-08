import React, { Component } from 'react';
import Timer from '../Timer';

class IndvTask extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {id,title,description,timer} = this.props.todo
    return (
      <div>
        <p>===================================</p>
        <p>{id}</p>
        <p>{title}</p>
        <p>{description} </p>
        <Timer counter={timer} />
        <button onClick={() => {this.props.deleteTask(id)}}>Delete</button>
        <p>===================================</p>
        
      </div>
    );
  }
}



export default IndvTask;
