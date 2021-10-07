import "./App.css";
import { useState } from 'react'
import ToDoCreateCard from './components/ToDoCreate/ToDoCreateCard.js'
import ToDoListHolder from './components/ToDoListHolder/ToDoListHolder.js'

function App() {
  const [toDoItems, setToDoItems] = useState([])

  const addTask = (task) => {
    setToDoItems( toDoItems => {
      return [{id: parseInt(Math.random() * 10000).toString(), name: task, done: false}, ...toDoItems]
    })
  }

  const markAsFinished = (taskId) => {
    setToDoItems( toDoItems => {
      return toDoItems.map( item => item.id === taskId ? {...item, done: true} : item )
    })
  }

  return (
    <div className="App">
        <ToDoCreateCard addTask={addTask}/>
        <ToDoListHolder tasks={toDoItems} markAsFinished={markAsFinished}/>
    </div>
  )
}

export default App;
