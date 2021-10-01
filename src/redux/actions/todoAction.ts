import { Todo } from "../../types/todo.type"

export const addTodo = (payload: Todo) => {
  return {
    type: "ADD_TODO",
    payload,
  }
}

export const deleteTodo = (payload: Todo["id"]) => {
  return {
    type: "DELETE_TODO",
    payload,
  }
}

export const toggleCompleted = (payload: Todo["id"]) => {
  return {
    type: "TOGGLE_COMPLETED",
    payload,
  }
}
