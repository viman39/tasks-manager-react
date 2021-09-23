import './ToDoCreateCard.css'
import { useState } from 'react'

const ToDoCreateCard = (props) => {
    const [task, setTask] = useState("")
    const [error, setError] = useState(false)

    const taskChangeHandler = (event) => {
        setTask(event.target.value)
        setError(false)
    }

    const submitAddToDo = (event) => {
        event.preventDefault()
        
        if ( task === "" ){
            setError(true)
        } else {
            props.addTask(task)
            setTask("")
        }
    }

    return (
        <div className="card">
            <form onSubmit={submitAddToDo}>
                {error === true && <p className="error">Input can not be empty</p>}
                <input type="text" onChange={taskChangeHandler} value={task} className="input" />
                <button className="button"> Add ToDo </button>
            </form>
        </div> 
    )
}

export default ToDoCreateCard