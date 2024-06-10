import React, { useState, useEffect } from 'react';

export default function GetAllState() {
    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState('');

    useEffect(() => {
        // Make an API request to fetch states
        fetch("http://localhost:8080/state/getAllState")
            .then((response) => response.json())
            .then((data) => {
                setStates(data);
            })
    }, []);

    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
    };

    return (
        <div>
            <label>Select a state:</label>
            <select value={selectedState} onChange={handleStateChange}>
                <option value="">Select a state</option>
                {states.map((state) => (
                    <option key={state.stateId} value={state.stateName}>
                        {state.stateName}
                    </option>
                ))}
            </select>
            <p>Selected state: {selectedState}</p>
        </div>
    );
}
