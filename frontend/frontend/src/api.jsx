const API_URL = 'https://your-api-endpoint.com';

export const fetchPrograms = async () => {
    const response = await fetch(`${API_URL}/programs`);
    if (!response.ok) throw new Error('Failed to fetch programs');
    return response.json();
};

export const fetchClients = async () => {
    const response = await fetch(`${API_URL}/clients`);
    if (!response.ok) throw new Error('Failed to fetch clients');
    return response.json();
};

export const enrollClientInProgram = async (clientId, programId) => {
    const response = await fetch(`${API_URL}/enroll`, {
        method: 'POST',
        body: JSON.stringify({ clientId, programId }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error('Failed to enroll client');
    return response.json();
};
