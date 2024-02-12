import React from 'react';

const SavedData = ({ data }) => {
    return (
        <div style={styles.container}>
            <p>{data}</p>
        </div>
    );
};

const styles = {
    container: {
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '20px',
        marginTop: '20px',
    }
};

export default SavedData;
