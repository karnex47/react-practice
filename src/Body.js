import React, { useEffect, useRef, useState } from 'react';
import TodoViewer from './components/todo-viewer';

function click(onClick, arr, setArr, text) {
    setArr(arr.concat(text));
    onClick();
}

const Body = ({ text, onClick }) => {
    const btn = useRef();
    const [arr, setArr] = useState([])
    // useEffect(() => {
    //     setArr(arr.concat(text))
    // });
    
    return (
        <>
            <div>{text}</div>
            <button ref={btn} onClick={() => click(onClick, arr, setArr, text)}>Button</button>
            <TodoViewer />
        </>
    );
}

export default Body;