import React from 'react';
import EmptySectionImage from './EmptySectionImage';

const LoadingPage = () => {
    const containerStyle = {
        display: 'flex',
        marginTop: '142px',
        width: '832px',
        height: '392px',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 'auto',
    };

    const textContainerStyle = {
        marginTop: '48px',
        textAlign: 'center',
    };

    const mainTextStyle = {
        fontSize: '24px',
    };

    const subTextStyle = {
        color: '#9E9E9E',
        fontSize: '18px',
        marginTop: '24px',
    };

    return (
        <div style={containerStyle}>
            <EmptySectionImage />
            <div style={textContainerStyle}>
                <p style={mainTextStyle}>It’s the beginning of a legendary sales pipeline</p>
                <p style={subTextStyle}>
                    When you have inbound E-mails <br /> you’ll see them here
                </p>
            </div>
        </div>
    );
};

export default LoadingPage;
