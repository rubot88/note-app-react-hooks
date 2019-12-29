import React from 'react';

export const Alert = ({ alert }) => {
    if (!alert) {
        return null;
    }
    return (
        <div class={`alert alert-${alert.type || 'warning'} `}>
            <strong className="mr-1">Warning!</strong>
            {alert.text}
            <button type="button" class="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
} 