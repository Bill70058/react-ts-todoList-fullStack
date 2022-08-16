/*
 * @Author: lzr lzr@email.com
 * @Date: 2022-08-14 16:44:29
 * @LastEditors: lzr lzr@email.com
 * @LastEditTime: 2022-08-14 17:35:01
 * @FilePath: /react-ts/src/components/TodoList.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import { Input, Button, List, Modal, Spin, message } from 'antd'
import {
  getTodoList,
  addTodoList,
  updateTodoList,
  deleteTodoList,
} from '../utils/api'
import TodoDelBtn from './TodoDelBtn'

export default class TodoList extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      inputValue: '',
      editInput: '',
      todoList: [],
      isModalVisible: false,
      currentIndex: 0,
      isLoading: false,
    }
  }
  componentDidMount = () => {
    this.getTodoList()
  }
  getTodoList = () => {
    getTodoList().then((res?: any) => {
      if (res.code == 0) {
        this.setState({
          todoList: res.data,
        })
      } else {
        message.error(res.msg)
      }
    })
  }
  onChangeValue = (e: any) => {
    this.setState({
      inputValue: e.target.value,
    })
  }
  handleClick = () => {
    this.setState({
      isLoading: true,
    })
    addTodoList({ todo: this.state.inputValue }).then((res: any) => {
      this.setState({
        isLoading: false,
        inputValue: '',
      })
      message.success(res.msg)
      this.getTodoList()
    })
  }
  handleDel = (item: any) => {
    this.setState({
      isLoading: true,
    })
    deleteTodoList({ id: item._id }).then((res: any) => {
      if (res.code == 0) {
        this.setState({
          isLoading: false,
        })
      }
      message.success(res.msg)
      this.getTodoList()
    })
  }
  handleEdit = (index: number, item: any) => {
    this.setState({
      isModalVisible: true,
      editInput: this.state.todoList[index].todo,
      currentIndex: item._id,
    })
  }
  handleOk = () => {
    let { currentIndex, editInput } = this.state
    this.setState({
      isLoading: true,
    })
    updateTodoList({ todo: editInput, id: currentIndex }).then((res: any) => {
      this.setState({
        isLoading: false,
        isModalVisible: false,
      })
      message.success(res.msg)
      this.getTodoList()
    })
  }
  handleCancel = () => {
    this.setState({
      isModalVisible: false,
    })
  }
  render() {
    return (
      <div className="todo-list">
        <Spin spinning={this.state.isLoading}>
          {/* <TodoDelBtn id={1} callback={this.handleDel} /> */}
          <Input
            placeholder="input todo"
            value={this.state.inputValue}
            onChange={this.onChangeValue}
            style={{ width: 'calc(100% - 100px)' }}
          />
          <Button type="primary" onClick={this.handleClick}>
            join
          </Button>
          <List
            dataSource={this.state.todoList}
            renderItem={(item: any, index: number) => (
              <List.Item
                actions={[
                  <a
                    key="list-loadmore-edit"
                    onClick={() => this.handleEdit(index, item)}
                  >
                    edit
                  </a>,
                  <a
                    key="list-loadmore-delete"
                    onClick={() => this.handleDel(item)}
                  >
                    delete
                  </a>,
                ]}
              >
                {item.todo}
              </List.Item>
            )}
          ></List>

          <Modal
            title="Basic Modal"
            visible={this.state.isModalVisible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <Input
              value={this.state.editInput}
              onChange={(e: any) => {
                this.setState({ editInput: e.target.value })
              }}
            ></Input>
          </Modal>
        </Spin>
      </div>
    )
  }
}
