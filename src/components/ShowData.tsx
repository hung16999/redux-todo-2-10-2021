import React, { MouseEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteTodo, toggleCompleted } from "../redux/actions/todoAction"
import { RootState } from "../types/rootState.type"

const ShowData = () => {
  const store = useSelector((store: RootState) => store)
  const dispatch = useDispatch()

  const handleDeleteTodo = (
    id: string,
    event: MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation()
    dispatch(deleteTodo(id))
  }

  const handleToggleCompleted = (id: string) => {
    dispatch(toggleCompleted(id))
  }

  return (
    <>
      {store.todos.map((todo) => (
        <div key={todo.id} onClick={() => handleToggleCompleted(todo.id)}>
          {todo.name} {todo.completed && "(Completed)"}
          <button onClick={(event) => handleDeleteTodo(todo.id, event)}>
            x
          </button>
        </div>
      ))}
    </>
  )
}

export default ShowData
