import style from './ToDoCreateCard.module.css'
import { Fragment, useRef, useState } from 'react'
import Card from '../UI/Card'
import Modal from '../UI/Modal'

const ToDoCreateCard = (props) => {
    const [error, setError] = useState(false)
    const taskInputRef = useRef()

    const submitAddToDo = (event) => {
        event.preventDefault()

        const task = taskInputRef.current.value.trim();

        if ( task.length === 0 ){
          setError("Nothing entered!")
          return;
        }

        props.addTask(task)     

        taskInputRef.current.value = ''
    }

    const onDismiss = () => {
      setError(false)
    }

    return (
      <Fragment>
        {error && <Modal onDismiss={onDismiss} error={error}></Modal>}
        <Card cardBackground={`card-green`}>
          <form onSubmit={submitAddToDo}>
            <input type="text" className={style.input} ref={taskInputRef} />
            <button className={style.button}> Add ToDo </button>
          </form>
        </Card>
      </Fragment>
    );
}

export default ToDoCreateCard