import React from 'react';
import { useState } from 'react';

function InputBox(props) {
    const [inputValue, setInputValue] = useState("");
    const handleInput = (e) => {
        setInputValue(e.target.value);
    }
    const addChildTask = () => {
        props.addTask(inputValue);
        setInputValue("");
    }


    return (
        <>
        <div>
        <div className='inputBox'>
        <input type='text' value={inputValue} onChange={handleInput}/>
        <button onClick={ addChildTask }>Contact Me</button>
        </div>
        </div>
        </>
    )
}

export default InputBox
