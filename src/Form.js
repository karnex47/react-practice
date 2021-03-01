import React, { useRef } from 'react';

const Form = ({ onSubmit }) => {
    const input = useRef();
    const onButtonClick = () => {
        onSubmit(input.current.value);
    }
    return (
        <div className="form">
            <input ref={input} type="text" />
            <button onClick={onButtonClick} type="submit">Submit</button>
        </div>
    )
}

export default Form;