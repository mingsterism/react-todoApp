import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props)
    this.createTask = this.createTask.bind(this)
    this.handleTitleOnChange = this.handleTitleOnChange.bind(this)
    this.handleDescriptionOnChange = this.handleDescriptionOnChange.bind(this)
  }


  createTask(){
    console.log(this.props.todo)
    this.props.createTask(this.props.todo)
  }

  handleDescriptionOnChange(event){
    let description = event.target.value
    this.props.handleDescriptionOnChange(description);
  }
  handleTitleOnChange(event){
    let title = event.target.value
    this.props.handleTitleOnChange(title);
  }

  render() { 
    return (
      <div>
        <form>
          Title:<br/>
          <input type="text" name="title" onChange={this.handleTitleOnChange} value={this.props.todo.title}/><br/>
          Description:<br/>
          <input type="text" name="description" onChange={this.handleDescriptionOnChange} value={this.props.todo.description}/><br/>
        </form>
        <button onClick={this.createTask}> Add </button>

      </div>
    )
  }
}

export default Form;