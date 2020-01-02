import React from 'react';
import PropTypes from 'prop-types';


export const NotesItem = ({ note: { id, title, date }, removeNote }) => (
    <li
        className="list-group-item d-flex justify-content-between align-content-center">
        <div className="align-self-center">
            <strong className="mr-3">{title}</strong>
            <small>{date}</small>
        </div>
        <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={() => removeNote(id)}>&times;</button>
    </li>
);

NotesItem.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object),
    removeNote: PropTypes.func.isRequired
}

