import React from 'react';

function Buttons() {
    return (
        <section className='buttonsContainer'>
            <section className='homeButtons'>
                <button id='addMovie'>Add Movie</button>
            </section>
            <section className='homeButtons'>
                <button id='searchMovie'>Search Movie</button>
            </section>
        </section>
    )
}

export default Buttons;