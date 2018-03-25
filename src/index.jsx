import React from 'react'
import ReactDOM from 'react-dom'
// Libraries
import 'sanitize.css'
// My Components
import App from './components/App'
// My Stylesheets
import './style.scss'

ReactDOM.render(
    <div id="root">
        <App />
    </div>,
    document.querySelector('#app')
);
