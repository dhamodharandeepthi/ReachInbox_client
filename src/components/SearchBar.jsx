import { Search } from 'lucide-react';
import React from 'react';

const SearchBar = ({ currColor }) => {
    const containerStyle = {
        border: '1px solid gray',
        borderRadius: '4px',
        height: '28px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        backgroundColor: currColor ? '#23272C' : 'white',
    };

    const inputStyle = {
        backgroundColor: currColor ? '#23272C' : 'white',
        border: 'none',
        outline: 'none',
        height: '100%',
        paddingLeft: '8px',
        flex: 1,
    };

    return (
        <div style={containerStyle}>
            <Search color="gray" style={{ width: '20px', height: '20px', marginLeft: '4px' }} />
            <input type="text" placeholder="Search" style={inputStyle} />
        </div>
    );
};

export default SearchBar;
