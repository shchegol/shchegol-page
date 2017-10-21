import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Card from './layouts/Card'
import './styles/main.scss'

const app = document.getElementById('react-root');

ReactDOM.render((
        <BrowserRouter>
            <Card/>
        </BrowserRouter>
), app);