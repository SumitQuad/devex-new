import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const SideBar = ({ addFormField }) => {
    const handleInputTypeClick = (type) => {
        const inputField = {
            type: type,
            label: type.charAt(0).toUpperCase() + type.slice(1),
            id: Date.now()
        };
        addFormField(inputField);
    };

    return (
        <div style={styles.sideBar}>
            <div className="list-group list-group-flush">
                <a href="#" className="list-group-item list-group-item-action bg-light" onClick={() => handleInputTypeClick('number')} style={styles.item}>
                    <i className="fas fa-sort-numeric-up-alt mr-2" style={{marginRight:"10px"}}></i>Number
                </a>
                <a href="#" className="list-group-item list-group-item-action bg-light" onClick={() => handleInputTypeClick('date')} style={styles.item}>
                    <i className="far fa-calendar-alt mr-2" style={{marginRight:"10px"}}></i>Date
                </a>
                <a href="#" className="list-group-item list-group-item-action bg-light" onClick={() => handleInputTypeClick('text')} style={styles.item}>
                    <i className="far fa-calendar-alt mr-2" style={{marginRight:"10px"}}></i>Text
                </a>
            </div>
        </div>
    );
}

const styles = {
    sideBar: {
        backgroundColor: '#f8f9fa',
        borderRight: '1px solid #dee2e6',
        padding: '10px',
        minHeight: '100vh'
    },
    item: {
        color: '#495057',
        textDecoration: 'none',
        marginBottom: '5px'
    }
};

export default SideBar;
