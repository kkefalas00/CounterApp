import styles from "./Input.module.css";

const Input = ( {handleChange, ...props}) => {
    
    return <input onKeyUp={handleChange} {...props}/>
}

export default Input;