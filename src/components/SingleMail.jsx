import React from 'react';

const SingleMail = ({ currColor, subject, fromEmail, toEmail, body }) => {
    const containerStyle = {
        marginRight: '16px',
        border: '1px solid gray',
        padding: '12px',
        fontSize: '14px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        textAlign: 'left',
        marginBottom: '12px',
    };

    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
    };

    const dateStyle = {
        color: '#AEAEAE',
    };

    const detailStyle = {
        color: '#AEAEAE',
    };

    const bodyTextStyle = {
        width: '500px',
        color: currColor ? '#b7abab' : '#2a2626',
    };

    const bodyTextSecondaryStyle = {
        width: '500px',
        color: currColor ? '#bfb4b4' : '#2a2626',
    };

    return (
        <div style={containerStyle}>
            <div style={headerStyle}>
                <p>{subject}</p>
                <p style={dateStyle}>20 June 2022 : 9:16AM</p>
            </div>
            <p style={detailStyle}>From: {fromEmail}</p>
            <p style={detailStyle}>To: {toEmail}</p>
            <p style={bodyTextStyle}>
                {body.split("<p>").join("").split("</p>").join("").split("<br/>").join("").split(",")[0]} ,
            </p>
            <p style={bodyTextSecondaryStyle}>
                {body.split("<p>").join("").split("</p>").join("").split("<br/>").join("").split(",").slice(1)}
            </p>
        </div>
    );
};

export default SingleMail;
