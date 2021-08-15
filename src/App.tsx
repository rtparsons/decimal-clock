import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';

export default class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Dashboard></Dashboard>
            </BrowserRouter>
        );
    }
}
