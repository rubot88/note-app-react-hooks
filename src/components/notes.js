import React, { useContext } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


import { FirebaseContext } from '../context/firebase/firebaseContext';
import { NotesItem } from './notes-item';

export const Notes = ({ notes }) => {
    const { removeNote } = useContext(FirebaseContext);
    const renderNotes = notes.map((note) => (
        <CSSTransition
            timeout={800}
            classNames={'note'}
            key={note.id}>
            <NotesItem note={note}
                removeNote={removeNote} />
        </CSSTransition>

    ));
    return (
        <TransitionGroup
            component="ul"
            className="list-group">
            {renderNotes}
        </TransitionGroup>
    );
};



