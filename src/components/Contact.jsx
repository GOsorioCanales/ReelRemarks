import React from 'react';
import { Route, Switch } from "react-router";

function Contact() {
    return (
        <section className='contact'>
            <a id='email' href="mailto:gosoriocanales@gmail.com">Email</a>
            <a id='linkedin' href="https://www.linkedin.com/in/ernesto-osorio-canales/">LinkedIn</a>
        </section>
    )
}

export default Contact;