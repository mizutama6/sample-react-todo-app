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

  return (
    <>
      <h1>TODOアプリ</h1>
      <ul>
        {
          todos.map((todo, i) => (
            <li key={i}>
              <input type="button" value="x" />{todo.title}
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