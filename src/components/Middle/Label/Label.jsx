import styles from "./Label.module.css"

export default function Label({text}){
    return (
        <span className={styles.text}>{text}</span>
    )
}