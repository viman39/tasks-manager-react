import style from './ToDoCreateCard.module.css'
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
        
        if ( task.trim() === "" ){
            setError(true)
        } else {
            props.addTask(task)
            setTask("")
        }
    }

    return (
        <div className={style.card}>
            <form onSubmit={submitAddToDo}>
                {error === true && <p className={style.error}>Input can not be empty</p>}
                <input type="text" onChange={taskChangeHandler} value={task} className={style.input} />
                <button className={style.button}> Add ToDo </button>
            </form>
        </div> 
    )
}

export default ToDoCreateCard