import styles from './Card.module.css'

const Card = props => {
    console.log(props)
    return <div className={`${styles.card} ${styles[props.cardBackground]}`}>{props.children}</div>;
}

export default Card