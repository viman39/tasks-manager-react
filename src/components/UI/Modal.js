import styles from "./Modal.module.css"
import Button from "./Button"
import ReactDOM from 'react-dom'
import { Fragment } from 'react'    

const ModuleBackdrop = props => {
    return <div className={styles.backdrop} onClick={props.onDismiss}></div>;
}

const ModuleBody = props => {
    return (
      <div className={styles.modal}>
        <div className={styles.content}>
          <p>{props.error}</p>
        </div>
        <footer>
          <Button onClick={props.onDismiss}>Okay</Button>
        </footer>
      </div>
    );
}

const Module = props => {
  const modalOverla = document.getElementById("overlays");

    return (
      <Fragment>
        {ReactDOM.createPortal(
          <ModuleBackdrop onDismiss={props.onDismiss} />,
          modalOverla
        )}
        {ReactDOM.createPortal(<ModuleBody {...props} />, modalOverla)}
      </Fragment>
    );
}

export default Module