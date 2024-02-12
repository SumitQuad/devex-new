import React, { useState } from 'react';
import Sidebar from './components/SideBar/SideBar';
import FormField from './components/FieldBar/FieldBar';
import SavedData from './components/SavedData/SavedData';

const App = () => {
    const [formFields, setFormFields] = useState([]);
    const [savedData, setSavedData] = useState({});

    const addFormField = (field) => {
        setFormFields([...formFields, field]);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar addFormField={addFormField} />
                </div>
                <div className="col-md-6">
                    <div className="form-container">
                        {formFields.map((field, index) => (
                            <FormField key={index} field={field} />
                        ))}
                    </div>
                </div>
                <div className="col-md-3">
                 
                </div>
            </div>
        </div>
    );
};

export default App;
