import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListTask from './components/ListTask';

class App extends Component {
  constructor(props) {
    super(props)
    this.state =  {
      todo: {
        title: "",
        description: ""
      },
      todos: [ 
        {
          id: 1,
          title: "First title", 
          description: "A funny title",
          timer: 0,
        },
        {
          id: 2,
          title:"Anh Tu",
          description: "Hi guys",
          timer: 0,
        },
      ]
    }
    this.handleTitleOnChange = this.handleTitleOnChange.bind(this)
    this.handleDescriptionOnChange = this.handleDescriptionOnChange.bind(this)

  }

  createNewTask = (newTodo) => {
    newTodo.id = Date.now()
    const oldTodos = this.state.todos
    const newTodos = oldTodos.concat([newTodo])
    console.log(newTodo)
    this.setState({
      todos:newTodos
    })
  }

  deleteTask = (taskID) => {
    console.log('hello deleti', taskID)
    const oldTodos = this.state.todos 
    const newTodos = oldTodos.filter((todo) => {
      return todo.id != taskID
    })
    this.setState({
      todos: newTodos
    })
  }


handleTitleOnChange(value){
  console.log(value)
  const newTodo = {
    ...this.state.todo,
    ...{title: value}
  }
  this.setState({todo: newTodo})
}

handleDescriptionOnChange(value){
  const newTodo = {...this.state.todo, ...{description: value}}
  this.setState({todo: newTodo})
}

  render() {
    return (
      <div className="App">
        <ListTask 
          handleTitleOnChange={this.handleTitleOnChange}
          handleDescriptionOnChange={this.handleDescriptionOnChange} 
          todo={this.state.todo} todos={this.state.todos} 
          createTask={this.createNewTask} 
          deleteTask = {this.deleteTask}
        />
      </div>
    );
  }
}





export default App;
