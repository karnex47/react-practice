import React, { Component, createRef } from 'react';
import logo from './logo.svg';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.header = createRef();
    }
    componentDidMount() {
        console.log('header mounted');
    }
    render() {
        return (
            <header ref={this.header} className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
                <div>Bal chero</div>
            </header>
        )
    }
}
