/*
 * @Author: lzr lzr@email.com
 * @Date: 2022-08-14 17:18:09
 * @LastEditors: lzr lzr@email.com
 * @LastEditTime: 2022-08-14 17:22:59
 * @FilePath: /react-ts/src/components/TodoDelBtn.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import { Button } from 'antd'

interface IProps {
  id: number
  callback?: any
}

export default class TodoDelBtn extends Component<IProps, any> {
  handleDel = () => {
    // 进行删除操作，删除成功调用回调
    this.props.callback(this.props.id)
  }
  render() {
    return (
      <div>
        <Button onClick={this.handleDel}>del</Button>
      </div>
    )
  }
}
