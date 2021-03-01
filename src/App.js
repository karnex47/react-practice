import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Header from './Header';
import Body from './Body';
import Form from './Form';
import { addTodo } from './actions/todo';

import './App.css';

const App = () => {
    const [componentState, setComponentState] = useState(0);
    const dispatch = useDispatch();
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Body text={componentState} onClick={() => setComponentState(componentState + 1)} />
        <div>{componentState < 10 ? 'fuck' : 'shit'}</div>
        {componentState < 10 ? (<div>fuck</div>) : (<div>shit</div>)}
        <Form onSubmit={(input) => dispatch(addTodo({ value: input, checked: false, key: input }))} />
      </div>
    );
}

export default App;
