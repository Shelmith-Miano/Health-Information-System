const express = require('express');
const router = express.Router(); // You forgot to define 'router'
const clients = require('../data/db').clients;
const programs = require('../data/db').programs;
const { v4: uuidv4 } = require('uuid'); // Import the uuid library for generating unique IDs

router.get('/clients', (req, res) => {
    // Basic search implementation (optional)
    const searchTerm = req.query.search ? req.query.search.toLowerCase() : '';
    if (searchTerm) {
        const filteredClients = clients.filter(client =>
            client.name.toLowerCase().includes(searchTerm)
        );
        return res.json(filteredClients);
    }
    res.json(clients);
});

// POST /clients - Register a new client
router.post('/clients', (req, res) => {
    const { name, dateOfBirth, contact } = req.body; // Add more fields as needed
    if (!name) {
        return res.status(400).json({ message: 'Client name is required' });
    }
    const newClient = {
        id: clientIdCounter++,
        name,
        dateOfBirth,
        contact,
        enrolledPrograms: [] // Store program IDs
    };
    clients.push(newClient);
    console.log('Client registered:', newClient);
    res.status(201).json(newClient);
});

// GET /clients/:id - Get a specific client's profile (API endpoint for other systems)
// This endpoint fulfills the requirement to expose client profile via API.
router.get('/clients/:id', (req, res) => {
    const clientId = parseInt(req.params.id);
    const client = clients.find(c => c.id === clientId);

    if (!client) {
        return res.status(404).json({ message: 'Client not found' });
    }

    // Optionally, enrich the profile with program names instead of just IDs
    const clientProfile = {
        ...client,
        enrolledProgramsDetails: client.enrolledPrograms.map(programId => {
            const program = programs.find(p => p.id === programId);
            return program ? { id: program.id, name: program.name } : { id: programId, name: 'Unknown Program' };
        })
    };

    res.json(clientProfile);
});

// POST /clients/:id/enroll - Enroll a client in a program
router.post('/clients/:clientId/enroll', (req, res) => {
    const clientId = parseInt(req.params.clientId);
    const { programId } = req.body;

    if (!programId) {
        return res.status(400).json({ message: 'Program ID is required' });
    }

    const client = clients.find(c => c.id === clientId);
    if (!client) {
        return res.status(404).json({ message: 'Client not found' });
    }

    const program = programs.find(p => p.id === programId);
    if (!program) {
        return res.status(404).json({ message: 'Program not found' });
    }

    // Prevent duplicate enrollment
    if (client.enrolledPrograms.includes(programId)) {
        return res.status(409).json({ message: 'Client already enrolled in this program' });
    }

    client.enrolledPrograms.push(programId);
    console.log(`Client ${clientId} enrolled in program ${programId}`);
    res.json({ message: 'Enrollment successful', client });
});


