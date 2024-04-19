import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import '../styles/styles.css';
import Buttons from './Buttons';

function App() {
    return (
        <Router>
            <section>
                <section>
                    <Navbar/>
                </section>
                <section id='tittle'>
                    <h1 id='reelRemarks'>ReelRemarks</h1>
                </section>
                <section>
                    <Buttons/>
                </section>
            </section>
        </Router>
    )
}

export default App;