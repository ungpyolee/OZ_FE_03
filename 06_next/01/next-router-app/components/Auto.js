import React from 'react';

const Auto = ({ auto }) => {
    return (
        <div>
            <h1>{auto.name}</h1>
            <p>{auto.brand}</p>
            <p>{auto.price}</p>
        </div>
    );
};

export default Auto;
