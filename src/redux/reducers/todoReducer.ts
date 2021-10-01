import { todos } from "../../constants/todos"
import { Action } from "../../types/action.type"
import { RootState } from "../../types/rootState.type"
import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETED,
} from "../actions/todoActionType"

const initialState: RootState = {
  todos: todos,
}

const todoReducer = (state: RootState = initialState, action: Action) => {
  switch (action.type) {
    case ADD_TODO: {
      todos.unshift(action.payload)
      return {
        ...state,
        todos: todos,
      }
    }

    case DELETE_TODO: {
      const todoIndex = todos.findIndex((todo) => todo.id === action.payload)
      todos.splice(todoIndex, 1)
      return {
        ...state,
        todos: todos,
      }
    }

    case TOGGLE_COMPLETED: {
      const todoIndex = todos.findIndex((todo) => todo.id === action.payload)
      todos[todoIndex].completed = !todos[todoIndex].completed
      return {
        ...state,
        todos: todos,
      }
    }

    default:
      return state
  }
}

export default todoReducer
