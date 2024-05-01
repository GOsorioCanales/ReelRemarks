import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import AddMovie from './AddMovie';
import SearchMovie from './SearchMovie';

function Buttons() {
    return (
        <section className='buttonsContainer'>
            <section className='homeButtons'>
                <NavLink to='/addMovie'><button id='addMovie'>Add Movie</button></NavLink>
            </section>
            <section className='homeButtons'>
                <NavLink to='/searchMovie'><button id='searchMovie'>Search Movie</button></NavLink>
            </section>
        </section>
    )
}

export default Buttons;