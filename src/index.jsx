import React from 'react'
import ReactDOM from 'react-dom'
// Libraries
import 'sanitize.css'
// My Components
import { App, MenuAppBar } from './components/index'
// My Stylesheets
import './style.scss'

ReactDOM.render(
    <div id="root">
        <MenuAppBar />
        <App />
    </div>,
    document.querySelector('#app')
);
