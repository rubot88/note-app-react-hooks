import React, { useContext } from 'react';
import { FirebaseContext } from '../context/firebase/firebaseContext';

export const Notes = ({ notes }) => {
    const { removeNote } = useContext(FirebaseContext);

    const renderNotes = notes.map(({ id, title, date }) => (
        <li
            className="list-group-item d-flex justify-content-between align-content-center"
            key={id}>
            <div className="align-self-center">
                <strong className="mr-3">{title}</strong>
                <small>{date}</small>
            </div>
            <button
                type="button"
                className="btn btn-outline-danger btn-sm"
                onClick={() => removeNote(id)}>&times;</button>
        </li>
    ));
    return (
        <ul className="list-group">
            {renderNotes}
        </ul>
    );
}