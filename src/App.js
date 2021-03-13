import React, { useState } from 'react'

const App = () => {
  const [todos, setTodos] = useState([
    { title: 'JavaScriptを覚える' },
    { title: 'Reactを覚える' },
    { title: '英単語を覚える' },
    { title: '掃除をする' },
  ])
  return (
    <>
      <h1>TODOアプリ</h1>
      <ul>
        <li>
          {
            todos.map((todo, i) => (
              <li key={i}>
                <input type="button" value="x" />{todo.title}
              </li>
            ))
          }
        </li>
      </ul>
    </>
  )
}

export default App;