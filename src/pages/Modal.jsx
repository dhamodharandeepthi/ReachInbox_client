import React from 'react';
import '../App.css';

const Modal = ({ isOpen, children }) => {
    if (!isOpen) return null;

    const overlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#848484',
        opacity: 0.6,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const modalStyle = {
        backgroundColor: 'black',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        padding: '20px',
    };

    return (
        <div style={overlayStyle}>
            <div style={modalStyle}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
