const ToDoListHolder = (props) => {
    const tasks = props.tasks

    if ( tasks.length === 0 ){
        return <div>No tasks yet!</div>
    } else {
        const markAsFinished = (event) => {
            console.log(event)
            props.markAsFinished(event.target.id)
        }

        const filteredTasks = tasks.filter( task => { return task.done === false } )

        const tasksDisplay = filteredTasks.map(task =>
            <div id={task.id} key={task.id} onClick={markAsFinished}>
                {task.name} X
            </div>
        )

        return <div>
            {tasksDisplay}
        </div>
    }
}

export default ToDoListHolder