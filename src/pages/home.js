import React from 'react';

import { Form } from '../components/form';
import { Notes } from '../components/notes';

export const Home = () => {
    const notes = new Array(3)
        .fill(' ')
        .map((_, idx) => ({ id: idx, title: `Note ${idx + 1}`}));
    return (
        <div>
            <Form />
            <hr />
            <Notes notes={notes} />
        </div>
    )
}