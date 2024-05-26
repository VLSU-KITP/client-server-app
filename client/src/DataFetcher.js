import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataFetcher() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/data')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    return (
        <div>
            <h1>Data from Server</h1>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default DataFetcher;
