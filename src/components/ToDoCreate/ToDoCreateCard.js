import { useState } from 'react'

const ToDoCreateCard = (props) => {
    const [task, setTask] = useState("")

    const taskChangeHandler = (event) => {
        setTask(event.target.value)
    }

    const submitAddToDo = (event) => {
        event.preventDefault()

        props.addTask(task)
        setTask("")
    }

    return (
        <div>
            <form onSubmit={submitAddToDo}>
                <input type="text" onChange={taskChangeHandler} value={task} />
                <button> Add ToDo </button>
            </form>
        </div> 
    )
}

export default ToDoCreateCard