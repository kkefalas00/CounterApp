import styles from "./Wall.module.css";
import { useState, useEffect, useRef } from "react";
import Header  from "../Header/Header";
import SectionMid from "../Middle/SectionMid/SectionMid";
import Box from "../Footer/Box";
import Button from "../Button/Button";


export default function Wall(){

    const input = useRef();
    const [initialNum, setInitialNum] = useState(input?.current?.value);
    const [text, setText] = useState("The initial counter was 0. It is not a prime number")

    const decrement = () =>{
        setInitialNum((prev)=>{
            if(prev > 0){
               return prev = prev - 1;
            }else{
                return 0;
            }
            
        })
    }

    const increment = () =>{
        setInitialNum((prev)=>{
           return prev = prev + 1;
        })
    }
    
    useEffect(()=>{


        if(initialNum % 2 === 0){
            setText(`The counter is ${initialNum}. It is a prime number`)
        }else{
            setText(`The counter is ${initialNum}. It is not a prime number`)
        }
        
    },[initialNum,text]);

    const button = <Button text={"Increment"} icon={"plus"} onclick={increment}/>
    const btn = <Button text={"Decrement"} icon = {"minus"} onclick={decrement}/>
    return (
        <div className={styles.wall}>
            <Header />
            <SectionMid initialNum={initialNum} input= {input}/>
            <Box button={button} btn={btn} initialNum={initialNum} text={text}/>
        </div>
    )
}