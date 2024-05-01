import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Navbar from './navbar';
import '../styles/styles.css';
import Buttons from './Buttons';
import About from './About';
import Contact from './Contact';
import AddMovie from './AddMovie';
import SearchMovie from './SearchMovie';

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
                <Routes>
                    <Route path='/' element={<Buttons/>}/>
                    <Route path='/about' element={<About/>} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/addMovie' element={<AddMovie />} />
                    <Route path='/searchMovie' element={<SearchMovie/>} />
                </Routes>
            </section>
        </Router>
    )
}

export default App;