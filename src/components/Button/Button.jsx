import styles from "./Button.module.css"
import { Plus, Minus } from "lucide-react";

export default function Button({text,icon,onclick,...props}){

    return (
        <button {...props} className={styles.button} onClick={onclick}>
            {text}
            {icon === "plus" && <Plus size={16} style={{ marginRight:"1em"}} />}
            {icon === "minus" && <Minus size={16} style={{ marginRight:"1em" }} />}
        </button>
    )
}