import React from "react";
import InputBox from "./InputBox";
import Lists from './Lists';
import { useState } from "react";

function Todo() {
    const [taskArr,setTaskArr] = useState([]);

    const addTask = (inputValue) => {
        const newTask = inputValue;


    const newTaskArr = [...taskArr, newTask];
    setTaskArr(newTaskArr);  
    }

    const handleDelete = (idx)=>{
        const fileteredTasks = taskArr.filter((task,cIdx)=> {
            return cIdx != idx;
        })
        setTaskArr(fileteredTasks)
    }
    return (
        <>
        <InputBox addTask={ addTask }></InputBox>
        <Lists taskArr={ taskArr } handleDelete= { handleDelete }></Lists>
        </>
    )
}
export default Todo