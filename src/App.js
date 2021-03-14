import React, { useState } from 'react'

const App = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    if (todo === '') {
      alert('入力してください')
      return
    }
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
    <div className="py-10 px-5 m-auto sm:w-4/5 md:w-2/3 lg:1/2" style={{ maxWidth: '600px' }}>
      <h1 className="text-xl mb-5">TODOアプリ</h1>
      <input
        type="text"
        id="todo"
        className="border rounded outline-none px-2 py-1"
      />
      <input
        type="button"
        value="追加"
        onClick={() => addTodo(document.getElementById('todo').value)}
        className="px-2 py-1 rounded ml-2 mb-10 primary outline-none border border-blue-400 text-blue-400 bg-white hover:bg-blue-400 hover:text-white"
      />
      <ul>
        {
          todos.map((todo, i) => (
            <li key={i} className="mb-4 px-3 py-2 rounded border flex justify-between items-center ">
              {todo.title}
              <input
                type="button"
                value="x"
                onClick={() => removeTodo(i)}
                className="leading-none py-1 px-2 rounded bg-white border border-red-400 text-red-400 ml-2 outline-none hover:bg-red-400 hover:text-white"
              />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App;