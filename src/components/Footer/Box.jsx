import styles from "./Box.module.css"
import Label from "../Middle/Label/Label"

export default function Box({button : Button, btn : Btn, initialNum, text}){

    return (
        <div className={styles.box}>
            <div className={styles.boxSec}>
                <Label text={text}/>
                <div className={styles.boxThird}>
                    {Button} {initialNum} {Btn}
                </div>
            </div>
        </div>
    )
}