import React from 'react';

const Icon = ({ currColor, isActive, children, onClick }) => {
    const activeStyle = {
        backgroundColor: currColor && isActive ? '#2F3030' : (!currColor && isActive ? '#E5E7EB' : 'transparent'),
        padding: '4px',
        borderRadius: '4px',
        cursor: 'pointer',
    };

    return (
        <div style={activeStyle} onClick={onClick}>
            {children}
        </div>
    );
};

export default Icon;
