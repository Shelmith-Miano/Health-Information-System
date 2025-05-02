import React, { useState } from 'react';

const Client = ({ addClient }) => {
    const [clientName, setClientName] = useState('');
    const [dob, setDob] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (clientName && dob) {
            addClient({ clientName, dob });
            setClientName('');
            setDob('');
        }
    };

    return (
        <div>
            <h2>Client Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Client Name: </label>
                    <input
                        type="text"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Date of Birth: </label>
                    <input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Client</button>
            </form>
        </div>
    );
};

export default Client;
