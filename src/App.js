import React, { useState } from 'react'

const App = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { title: todo }
    ])
    document.getElementById('todo').value = ''
  }

  const removeTodo = (i) => {
    todos.splice(i, 1)
    setTodos([...todos])
  }

  return (
    <div className="">
      <h1>TODOアプリ</h1>
      <input type="text" id="todo" />
      <input type="button" value="追加" onClick={() => addTodo(document.getElementById('todo').value)} />
      <ul>
        {
          todos.map((todo, i) => (
            <li key={i}>
              <input type="button" value="x" onClick={() => removeTodo(i)} />{todo.title}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App;