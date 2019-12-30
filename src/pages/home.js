import React, { useEffect, useContext } from 'react';

import { Form } from '../components/form';
import { Notes } from '../components/notes';
import { FirebaseContext } from '../context/firebase/firebaseContext';
import { Loader } from '../components/loader';

export const Home = () => {
    const { loading, notes, fetchNotes } = useContext(FirebaseContext);
    useEffect(() => {
        fetchNotes();
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            <Form />
            <hr />
            {loading
                ? <Loader />
                : <Notes notes={notes} />}
        </div>
    )
}