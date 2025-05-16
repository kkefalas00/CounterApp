import styles from "./Header.module.css"
const imagePath = "/images/detective.png";

export default function Header(){
    return(
        <div className={styles.header}>
            <img src={imagePath} alt="detective" />
        </div>
    )
    
}