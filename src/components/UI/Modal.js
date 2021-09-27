import styles from "./Modal.module.css"
import Button from "./Button"
import ReactDOM from 'react-dom'
import { Fragment } from 'react'    

const ModuleBackdrop = props => {
    return <div className={styles.backdrop} onClick={props.onDismiss}></div>;
}

const ModuleBody = props => {
    return (
      <div className={styles.card}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onDismiss}>Okay</Button>
        </footer>
      </div>
    );
}

const Module = props => {
    return (
      <Fragment>
        {ReactDOM.createPortal(
          <ModuleBackdrop onDismiss={props.onDismiss} />,
          document.getElementById("backdrop-root")
        )}
        {ReactDOM.createPortal(
          <ModuleBody {...props} />,
          document.getElementById("overlay-root")
        )}
      </Fragment>
    );
}

export default Module