import React from 'react';
import { Link } from 'react-router-dom';

function AddMovie() {
    return (
        <section>
            <input type='text' placeholder='Movie Title' />
            <input type='text' placeholder='Director' />
            <input type='text' placeholder='Cast' />
            <input type='text' placeholder='When did you see it?' />
            <input type='text' placeholder='Review' />
            <button>Submit</button>
        </section>
    )
};

export default AddMovie;