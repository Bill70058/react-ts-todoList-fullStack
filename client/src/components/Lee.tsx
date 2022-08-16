import React, { Component } from 'react'

interface IUser {
  age: number
}
interface IProps {
  name: string
  age?: number
  user?: IUser
}

export default class Lee extends Component<IProps, any> {
  render() {
    return (
      <div>
        <h1>Lee component</h1>
        <h2>{this.props.name}</h2>
        <h3>{this.props.age}</h3>
        <h4>{this.props.user?.age}</h4>
      </div>
    )
  }
}
