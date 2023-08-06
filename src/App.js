import "./App.css";

import React, { Component } from "react";
import TaskList from "./Components/TaskList";
import Add from "./Components/Add";

export default class App extends Component {
  state = {
    todos: [
      { id: Math.random(), action: "Wake Up", isDone: true },
      { id: Math.random(), action: "Go Out", isDone: false },
    ],
    newAction: "hello",
  };
  // delete function
  handleDelete = (ID) =>
    this.setState({ todos: this.state.todos.filter((el) => el.id !== ID) });
  // complete Function
  handleComplete = (THEID) =>
    this.setState({
      todos: this.state.todos.map((el) =>
        el.id === THEID ? { ...el, isDone: !el.isDone } : el
      ),
    });
    handeChange=(x)=>this.setState({newAction:x})
    handleAdd=(newTask)=>this.setState({todos:[...this.state.todos,newTask]})
  render() {
    return (
      <div className="App">
        <Add newAction={this.state.newAction} handeChange={this.handeChange} handleAdd={this.handleAdd} />
        <TaskList
          list={this.state.todos}
          deleteFunction={this.handleDelete}
          completeFunction={this.handleComplete}
        />
      </div>
    );
  }
}
