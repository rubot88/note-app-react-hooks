import React, { useState, useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';

export const Form = () => {
    const [value, setValue] = useState('');
    const { show } = useContext(AlertContext);

    const submitHandler = (event) => {
        event.preventDefault();
        if (value.trim()) {
            show('Note was created', 'success');
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