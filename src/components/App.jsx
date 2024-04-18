import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import '../styles/styles.css';

function App() {
    return (
        <Router>
            <section>
                <section>
                    <Navbar/>
                </section>
                <h1>ReelRemarks</h1>
            </section>
        </Router>
    )
}

export default App;