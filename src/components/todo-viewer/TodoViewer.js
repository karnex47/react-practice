import React from 'react';
import { useSelector } from 'react-redux';
import select from './selector';

const TodoViewer = () => {
    const { todos, totalCount, doneCount } = useSelector(select);
    return (
        <div>
            <span>{`${doneCount}/${totalCount} done`}</span>
            <>{todos.map(todo => <div>{todo.value}</div>)}</>
        </div>
    )
}

export default TodoViewer;