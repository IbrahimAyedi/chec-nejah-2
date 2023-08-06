import React, { Component } from 'react'

export default class Add extends Component {
    handleSubmit=(e)=>{
        e.preventDefault()
        const newItem={
            id:Math.random(),action:this.props.newAction
        }
        this.props.handleAdd(newItem)
        this.props.handeChange("")
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
            <input type="text" value={this.props.newAction}  onChange={e=>this.props.handeChange(e.target.value)} />
            <input type="submit" />
        </form>
      </div>
    )
  }
}
