import React, { useReducer, useContext } from 'react';
import axios from 'axios';
import { FirebaseContext } from './firebaseContext';
import { firebaseReducer } from './firebaseReducer';
import { SHOW_LOADER, HIDE_LOADER, REMOVE_NOTE, ADD_NOTE, FETCH_NOTES } from '../types';
import { AlertContext } from '../alert/alertContext';

const url = process.env.REACT_APP_DB_URL;

export const FirebaseState = ({ children }) => {
    const initialState = {
        notes: [],
        loading: false
    };
    const [state, dispatch] = useReducer(firebaseReducer, initialState);
    const { show } = useContext(AlertContext);

    const showLoader = () => {
        dispatch({ type: SHOW_LOADER })
    };
    const hideLoader = () => {
        dispatch({
            type: HIDE_LOADER
        })
    }
    const fetchNotes = async () => {
        showLoader();
        const res = await axios.get(`${url}/notes.json`);
        if (res.data) {
            const payload = Object.keys(res.data)
                .map(key => {
                    return { ...res.data[key], id: key }
                });
            dispatch({ type: FETCH_NOTES, payload });
        } else {
            hideLoader();
            show('There are no notes to show');
        }
    };

    const addNote = async title => {
        const note = {
            title,
            date: new Date().toLocaleDateString()
        };

        try {
            const res = await axios.post(`${url}/notes.json`, note);
            const payload = {
                ...note,
                id: res.data.name
            };
            dispatch({ type: ADD_NOTE, payload });
        } catch (error) {
            throw new Error(error.message);
        }
    }

    const removeNote = async id => {
        await axios.delete(`${url}/notes/${id}.json`);
        dispatch({
            type: REMOVE_NOTE,
            payload: id
        });
        show("Note was removed", 'success');
        if (state.notes.length < 2) {
            setTimeout(() => show('There are no notes to show') , 1000);
        }
    }

    return (<FirebaseContext.Provider value={{
        showLoader,
        addNote,
        removeNote,
        fetchNotes,
        loading: state.loading,
        notes: state.notes
    }}>
        {children}
    </FirebaseContext.Provider>);
}
