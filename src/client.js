import React from 'react'
import ReactDOM from 'react-dom'
import MainLayout from './layouts/MainLayout'
import './styles/main.scss'

const app = document.getElementById('react-root');

ReactDOM.render((
    <div className="background">
        <MainLayout/>
    </div>
), app);