import React, { Component } from "react";
import TaskCard from "./TaskCard";

export default class TaskList extends Component {
  render() {
    // console.log(this.props.deleteFunction)
    return (
      <div>
        {React.Children.toArray(
          this.props.list.map((el) => (
            <TaskCard
              task={el}
              functionDelete={this.props.deleteFunction}
              functionComplete={this.props.completeFunction}
            />
          ))
        )}
      </div>
    );
  }
}
