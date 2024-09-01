import { ChevronDown, RotateCw } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { resetMail } from '../actions/actions';
import { useNavigate } from 'react-router-dom';

const InboxHeader = ({ currColor }) => {
    const navigate = useNavigate();
    const [token, setToken] = useState('');

    useEffect(() => {
        const storedToken = localStorage.getItem('reachinbox-auth');
        setToken(storedToken ? JSON.parse(storedToken) : '');
    }, []);

    const handleReset = () => {
        resetMail(token).then(() => navigate('/'));
    };

    const headerContainerStyle = {
        width: '160px',
        display: 'flex',
        gap: '4px',
        alignItems: 'center',
    };

    const headerTextStyle = {
        fontSize: '20px',
        color: '#4285F4',
        textAlign: 'left',
    };

    const buttonStyle = {
        width: '32px',
        height: '32px',
        backgroundColor: currColor ? '#25262B' : '#e1e7ee',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const iconStyle = {
        width: '20px',
        height: '20px',
        marginLeft: '6px',
        cursor: 'pointer',
    };

    return (
        <>
            <div style={headerContainerStyle}>
                <h1 style={headerTextStyle}>All Inbox(s)</h1>
                <ChevronDown color="#4285F4" style={{ cursor: 'pointer' }} />
            </div>
            <div style={buttonStyle}>
                <RotateCw style={iconStyle} onClick={handleReset} />
            </div>
        </>
    );
};

export default InboxHeader;
