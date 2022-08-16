import http from './http'
let todoList = '/api/todo'


function getTodoList(data?:object) {
  return http.get(todoList, data)
}
function addTodoList(data:object) {
  return http.post(todoList, data)
}
function updateTodoList(data:object) {
  return http.put(todoList, data)
}
function deleteTodoList(data:object) {
  return http.delete(todoList, data)
}

export {
  getTodoList,
  addTodoList,
  updateTodoList,
  deleteTodoList
}
