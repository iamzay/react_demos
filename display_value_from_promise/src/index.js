import './index.css'

import React from 'react'
import {render} from 'react-dom'

import App from './App'

let p = fetch('https://api.github.com/search/repositories?q=javascript&sort=stars').then(
    res => res.json(),
    err => {
        throw Error(err.message)
    }
);

render(<App promise={p}/>, document.querySelector('#app'));
