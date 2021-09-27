import style from './ToDoCreateCard.module.css'
import { useRef } from 'react'
import Card from '../UI/Card'

const ToDoCreateCard = (props) => {
    const taskInputRef = useRef()

    const submitAddToDo = (event) => {
        event.preventDefault()

        const task = taskInputRef.current.value;

        props.addTask(task)     

        taskInputRef.current.value = ''
    }

    return (
      <Card cardBackground={`card-green`}>
        <form onSubmit={submitAddToDo}>
          <input type="text" className={style.input} ref={taskInputRef} />
          <button className={style.button}> Add ToDo </button>
        </form>
      </Card>
    );
}

export default ToDoCreateCard