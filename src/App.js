import React, { useState } from 'react'

const App = () => {
  const [todos, setTodos] = useState([
    { title: 'JavaScriptを覚える' },
    { title: 'Reactを覚える' },
    { title: '英単語を覚える' },
    { title: '掃除をする' },
  ])

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { title: todo }
    ])
  }

  const removeTodo = (i) => {
    todos.splice(i, 1)
    setTodos([...todos])
  }

  return (
    <>
      <h1>TODOアプリ</h1>
      <ul>
        {
          todos.map((todo, i) => (
            <li key={i}>
              <input type="button" value="x" onClick={() => removeTodo(i)} />{todo.title}
            </li>
          ))
        }
        <input type="text" id="todo" />
        <input type="button" value="追加" onClick={() => addTodo(document.getElementById('todo').value)} />
      </ul>
    </>
  )
}

export default App;