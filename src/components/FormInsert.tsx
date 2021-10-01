import React, { ChangeEvent, FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { v4 } from "uuid"
import { addTodo } from "../redux/actions/todoAction"
import { Todo } from "../types/todo.type"

const FormInsert = () => {
  const [name, setName] = useState<string>("")
  const dispatch = useDispatch()

  const handleAddTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const newTodo: Todo = { id: v4(), name: name, completed: false }
    dispatch(addTodo(newTodo))
    setName("")
  }

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  return (
    <form onSubmit={handleAddTodo}>
      <input type="text" value={name} onChange={handleChangeName} />
    </form>
  )
}

export default FormInsert
