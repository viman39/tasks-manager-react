import Card from '../UI/Card';
import styles from './ToDoListHolder.module.css'

const ToDoListHolder = (props) => {
    const tasks = props.tasks

    if ( tasks.length === 0 ){
        return <Card>No tasks yet!</Card>;
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
          <Card cardBackground={`card-pink`}>
            <ul>{tasksDisplay}</ul>
          </Card>
        );
    }
}

export default ToDoListHolder