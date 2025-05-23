import styles from "./SectionMid.module.css"
import Label from "../Label/Label";
import Input from "../Input/Input"

export default function SectionMid({handleChange ,initialNum, input}){


    return(
        <div className={styles.section}>
            <Label text={"Set Counter"}/>
            <Input handleChange={handleChange} initialNum={initialNum} ref={input} />
            <Label text={"Set"} />
        </div>
    );
};