import React, { Component } from 'react';
import IndvTask from '../IndvTask';
import Form from '../form';

class ListTask extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.todos)
  }

  render() {
    return (
      <div>
        {this.props.todos.map((x)=> {
              return (
                  <IndvTask key={x.id} todo = {x} deleteTask = {this.props.deleteTask} />
              )
          })
        }
        <Form todo={this.props.todo} handleTitleOnChange={this.props.handleTitleOnChange} handleDescriptionOnChange={this.props.handleDescriptionOnChange} createTask={this.props.createTask}/>
      </div>
    );
  }
}



export default ListTask;
