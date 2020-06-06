import React from 'react';
import {
    Redirect,
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import './App.scss';

import Header from './layout/Header/Header'
import CalculatorPage from "./components/CalculatorPage/CalculatorPage";
import HistoryPage from "./components/HistoryPage/HistoryPage";

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Route path="/" exact component={CalculatorPage}/>
                <Route path="/history" exact component={HistoryPage}/>
            </div>
        </Router>
    );
}

export default App;
