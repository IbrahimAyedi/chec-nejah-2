import React, { Component } from 'react'

export default class TaskCard extends Component {
  render() {
    return (
      <div className={this.props.task.isDone?"Complete":null} >
        <h1>{this.props.task.action}</h1>
        <button onClick={()=>this.props.functionDelete(this.props.task.id)}  >delete</button>
        <button onClick={()=>this.props.functionComplete(this.props.task.id)} >{this.props.task.isDone?"Undo":"Complete"}</button>
        <hr />
      </div>
    )
  }
}
