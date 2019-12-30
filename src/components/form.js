import React, { useState, useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { FirebaseContext } from '../context/firebase/firebaseContext';

export const Form = () => {
    const [value, setValue] = useState('');
    const { show } = useContext(AlertContext);
    const { addNote } = useContext(FirebaseContext)

    const submitHandler = (event) => {
        event.preventDefault();
        if (value.trim()) {
            addNote(value)
                .then(() => {
                    show('Note was created', 'success');
                })
                .catch(() => {
                    show('Something is gone wrong', 'danger');
                })
            setValue('');
        } else {
            show('Enter a note name', 'warning');
        }
    };


    return (
        <form
            onSubmit={submitHandler}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter a note name"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    );
};