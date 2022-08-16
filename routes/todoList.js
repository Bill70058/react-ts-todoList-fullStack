const express = require("express");
const TodoList = require('../models/todoList.model')
const template = require('../utils/msgTemplate')
const router = express.Router();


router.get('/', function(req, res) {
  TodoList.find()
    .then(todo =>  res.json(template.msgTemplate({
      msg: '查找成功',
      data: todo
    })))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.post('/', function(req, res) {
  let {todo} = req.body
  if (todo) {
    const newTodo = TodoList({
      todo
    })
    newTodo.save().then(() => {
      res.json(template.msgTemplate({
        msg: '保存成功'
      }))
    })
  }
})

router.put('/', function(req, res) {
  let {todo, id} = req.body
  if (todo && id) {
    TodoList.update({
      _id: id
    }, {
      $set: {
        todo
      }
    }).then(() => {
      res.json(template.msgTemplate({
        msg: '修改成功'
      }))
    })
  }
})

router.delete('/', function(req, res) {
  let {id} = req.body
  if (id) {
    TodoList.findByIdAndDelete({_id: id},{}, function() {
      res.json(template.msgTemplate({
        msg: '删除成功'
      }))
    })
  }
})

module.exports = router;