import React, { useState } from 'react';

const Program = ({ addProgram }) => {
    const [programName, setProgramName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (programName) {
            addProgram(programName);
            setProgramName('');
        }
    };

    return (
        <div>
            <h2>Program Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Program Name: </label>
                    <input
                        type="text"
                        value={programName}
                        onChange={(e) => setProgramName(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Create Program</button>
            </form>
        </div>
    );
};

export default Program;
