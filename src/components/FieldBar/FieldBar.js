import React, { useState } from 'react';
import './FieldBar.css'; // Import CSS file for styling

const FieldBar = () => {
    const [inputValues, setInputValues] = useState({
        text: '',
        number: '',
        date: ''
    });
    const [savedData, setSavedData] = useState([]);

    const handleChange = (event, type) => {
        setInputValues({ ...inputValues, [type]: event.target.value });
    };

    const handleSave = () => {
        const newData = Object.values(inputValues);
        setSavedData([...savedData, newData]);
        localStorage.setItem('savedData', JSON.stringify([...savedData, newData]));
        setInputValues({ text: '', number: '', date: '' });
        console.log('Data saved:', newData);
    };

    const handleReset = () => {
        setInputValues({ text: '', number: '', date: '' });
        setSavedData([]);
        localStorage.removeItem('savedData');
        console.log('Data reset');
    };

    const renderInputs = () => {
        return (
            <div>
                <input
                    type="text"
                    value={inputValues.text}
                    placeholder="Enter text"
                    onChange={(e) => handleChange(e, 'text')}
                    className="input-field"
                />
                <input
                    type="number"
                    value={inputValues.number}
                    placeholder="Enter number"
                    onChange={(e) => handleChange(e, 'number')}
                    className="input-field"
                />
                <input
                    type="date"
                    value={inputValues.date}
                    onChange={(e) => handleChange(e, 'date')}
                    className="input-field"
                />
            </div>
        );
    };

    return (
        <div>
            {renderInputs()}
            <button onClick={handleSave} className="save-button">Save</button>
            <button onClick={handleReset} className="reset-button">Reset</button>
            {savedData.length > 0 && (
                <table className="stored-data">
                    <thead>
                        <tr>
                            <th>Text</th>
                            <th>Number</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {savedData.map((data, index) => (
                            <tr key={index}>
                                <td>{data[0]}</td>
                                <td>{data[1]}</td>
                                <td>{data[2]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <br/>
        </div>
    );
};

export default FieldBar;
