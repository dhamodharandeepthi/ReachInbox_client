import React from 'react';
import { ChevronDown } from 'lucide-react';

const Workspace = () => {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
    };

    const textStyle = {
        fontSize: '12px',
    };

    return (
        <div style={containerStyle}>
            <p style={textStyle}>Tim's Workspace</p>
            <span><ChevronDown /></span>
        </div>
    );
};

export default Workspace;
