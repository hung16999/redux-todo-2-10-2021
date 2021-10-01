import React from "react"
import { Provider } from "react-redux"
import "./App.css"
import FormInsert from "./components/FormInsert"
import ShowData from "./components/ShowData"
import store from "./redux/store"

const App = () => {
  return (
    <Provider store={store}>
      <h2>Todo App</h2>
      <FormInsert />
      <ShowData />
    </Provider>
  )
}

export default App
