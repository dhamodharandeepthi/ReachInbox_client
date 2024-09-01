import { Send } from 'lucide-react';
import React from 'react';

const InboxEmailCard = ({ currColor, threadId, fromEmail, subject, handleChangeEmail }) => {
    const cardStyle = {
        width: '100%',
        paddingTop: '12px',
        paddingBottom: '12px',
        paddingLeft: '8px',
        cursor: 'pointer',
    };

    const headerStyle = {
        display: 'flex',
        gap: '4px',
        justifyContent: 'space-between',
        fontSize: '12px',
    };

    const subTextStyle = {
        fontSize: '10px',
        color: currColor ? '#7FFF00' : '#1E3A8A',
    };

    const dateStyle = {
        color: '#A1A1AA',
    };

    const subjectStyle = {
        fontSize: '10px',
        color: '#A1A1AA',
    };

    const badgeStyle = {
        width: '65px',
        height: '16px',
        paddingRight: '4px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        border: '1px solid #374151',
        borderRadius: '8px',
        backgroundColor: currColor ? '#25262B' : '#e1e7ee',
    };

    const campaignStyle = {
        width: '112px',
        height: '16px',
        padding: '4px',
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #374151',
        borderRadius: '8px',
        gap: '4px',
        backgroundColor: currColor ? '#25262B' : '#e1e7ee',
    };

    const dotStyle = {
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: '#7FFF00',
        marginTop: '2px',
    };

    return (
        <div style={cardStyle} onClick={() => handleChangeEmail(threadId)}>
            <div style={headerStyle}>
                <p>{fromEmail}</p>
                <p style={dateStyle}>Mar 7</p>
            </div>
            <p style={subjectStyle}>{subject}</p>
            <div style={{ display: 'flex', fontSize: '10px', gap: '12px', marginTop: '8px' }}>
                <div style={badgeStyle}>
                    <div style={dotStyle}></div>
                    <p style={subTextStyle}>Interested</p>
                </div>
                <div style={campaignStyle}>
                    <Send color={currColor ? 'white' : 'black'} style={{ height: '8px', marginTop: '4px', width: '8px', marginLeft: '8px' }} />
                    <p>Campaign Name</p>
                </div>
            </div>
        </div>
    );
};

export default InboxEmailCard;
