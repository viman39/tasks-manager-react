import styles from './ToDoListHolder.module.css'

const ToDoListHolder = (props) => {
    const tasks = props.tasks

    if ( tasks.length === 0 ){
        return <div className={styles.card}>No tasks yet!</div>;
    } else {
        const markAsFinished = (event) => {
          props.markAsFinished(event.target.id);
        }

        const tasksDisplay = tasks.map((task) => (
          <li
            id={task.id}
            key={task.id}
            onClick={markAsFinished}
            className={`${styles.task} ${
              task.done === true && styles["task-done"]
            }`}
          >
            {task.name} {task.done === true ? ' V' : ' X'}
          </li>
        ));

        return (
          <div className={styles.card}>
            <ul>{tasksDisplay}</ul>
          </div>
        );
    }
}

export default ToDoListHolder