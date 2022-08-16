/*
 * @Author: lzr lzr@email.com
 * @Date: 2022-08-14 14:49:22
 * @LastEditors: lzr lzr@email.com
 * @LastEditTime: 2022-08-14 16:44:56
 * @FilePath: /react-ts/src/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import Lee from './components/Lee'
import State from './components/State'
import TodoList from './components/TodoList'
import './App.css'

class App extends Component<any, any> {
  render() {
    return (
      <>
        <TodoList />
        {/* <h1>React ts</h1>
        <Lee name="lin" />
        <Lee name="lin" age={18} />
        <Lee name="lin" age={18} user={{ age: 20 }} />
        <hr />
        <State /> */}
      </>
    )
  }
}

export default App
