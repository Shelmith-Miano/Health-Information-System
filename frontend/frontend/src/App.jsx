import React, { useState } from 'react';
import Client from './components/Client';
import Program from './components/Program';
import './App.css';

function App() {
    const [clients, setClients] = useState([]);
    const [programs, setPrograms] = useState([]);

    const addClient = (client) => {
        setClients([...clients, client]);
    };

    const addProgram = (programName) => {
        setPrograms([...programs, programName]);
    };

    return (
        <div>
            <h1>Client and Program Management</h1>
            <Client addClient={addClient} />
            <Program addProgram={addProgram} />
            <div>
                <h3>Clients</h3>
                <ul>
                    {clients.map((client, index) => (
                        <li key={index}>
                            {client.clientName} - {client.dob}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Programs</h3>
                <ul>
                    {programs.map((program, index) => (
                        <li key={index}>{program}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
