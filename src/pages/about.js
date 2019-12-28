import React from 'react';

export const About = () => (
    <div className="about jumbotron">
        <h1>About</h1>
        <p>This app is created for educational purposes.</p>
        <p>Version 1.0.01.</p>
        <h3>Used technologies: </h3>
        <ul className="list-group">
            <li className="list-group-item list-group-item-action">React</li>
            <li className="list-group-item list-group-item-action">React Router DOM</li>
            <li className="list-group-item list-group-item-action">React Hooks</li>
            <li className="list-group-item list-group-item-action">Bootstrap</li>
            <li className="list-group-item list-group-item-action">SASS</li>
            <li className="list-group-item list-group-item-action">Axios</li>
        </ul>
    </div>
);