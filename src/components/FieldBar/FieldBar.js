import React, { useState } from 'react';

const FieldBar = ({ field }) => {
    const [inputValue, setInputValue] = useState('');
    const [storedData, setStoredData] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSave = () => {
        localStorage.setItem(field.type, inputValue); // Store data in local storage
        console.log('Field saved:', inputValue);
    };

    const handleView = () => {
        const storedValue = localStorage.getItem(field.type); // Retrieve data from local storage
        setStoredData(storedValue);
    };

    const renderInput = () => {
        switch (field.type) {
            case 'text':
            case 'number':
            case 'date':
                return (
                    <div style={styles.container}>
                        <input
                            type={field.type}
                            placeholder={field.label}
                            value={inputValue}
                            onChange={handleChange}
                            style={styles.input}
                        />
                        <button onClick={handleSave} style={styles.button}>Save</button>
                        <button onClick={handleView} style={styles.button}>View</button>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <form>
            {renderInput()}
            <div>{storedData}</div>
        </form>
    );
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px'
    },
    input: {
        marginRight: '10px',
        padding: '5px',
        borderRadius: '5px',
        border: '1px solid #ccc'
    },
    button: {
        padding: '5px 10px',
        borderRadius: '5px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        marginLeft: '5px'
    }
};

export default FieldBar;
