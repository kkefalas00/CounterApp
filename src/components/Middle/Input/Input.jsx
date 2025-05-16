import styles from "./Input.module.css";

const Input = ({...props}) => {
    
    return <input {...props} defaultValue={0}/>
}

export default Input;