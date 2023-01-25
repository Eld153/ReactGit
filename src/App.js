import { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function App() {
    
  const [todos, setTodos] = useState([])

  // Условие добавления задачи
  const addTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2,9),
        task: userInput,
        complete: false
      }
      setTodos([...todos, newItem])
    }
  }

  // Удалить задачу  
  const deleteTask = (id) => {
      setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  // Зачеркнуть задачу
  const clickStrikeout = (id) => {
      setTodos([
        ...todos.map((todo) => 
        todo.id === id ? {...todo, complete: !todo.complete} : {...todo}
        )
      ])
  }

  return (
    <div className="App">
      <header>
        <h1>Список задач: {todos.length}</h1>
      </header>
      <TodoForm addTask={addTask}/>
      {todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            clickStrikeout={clickStrikeout}
            deleteTask={deleteTask}
          />
        )
      })}
    </div>
  );
}

export default App
