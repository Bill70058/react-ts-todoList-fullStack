import React, { Component } from 'react'

interface IState {
  counter: number
}

export default class State extends Component<any, IState> {
  constructor(props: any, content: any) {
    super(props, content)
    this.state = {
      counter: 0,
    }
  }
  componentDidMount() {
    for (let i = 0; i < 100; i++) {
      console.log(this.state.counter)
      this.setState((state, props) => ({
        counter: state.counter + 1,
      }))
    }
  }
  render() {
    return <div>{this.state.counter}</div>
  }
}
