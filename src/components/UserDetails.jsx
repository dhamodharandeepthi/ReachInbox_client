import React from 'react';
import { Mail } from 'lucide-react';

const UserDetails = ({ currColor }) => {
    const containerStyle = {
        width: '100%',
        padding: '0 8px',
    };

    const sectionStyle = {
        width: '100%',
        height: '32px',
        margin: '16px 0',
        border: '1px solid',
        borderColor: currColor ? '#444' : '#ccc',
        borderRadius: '8px',
        backgroundColor: currColor ? '#222426' : '#fff',
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px'
    };

    const titleStyle = {
        width: '100%',
        fontSize: '16px',
        margin: '8px 0',
        textAlign: 'left',
    };

    const detailStyle = {
        fontSize: '14px',
        margin: '0 8px',
        display: 'flex',
        justifyContent: 'space-between',
    };

    const activityStyle = {
        fontSize: '16px',
        margin: '16px 0',
        color: currColor ? '#fff' : '#000',
        fontWeight: 'bold'
    };

    const activityContainerStyle = {
        padding: '8px',
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        spaceY: '16px',
    };

    const stepStyle = {
        display: 'flex',
        gap: '16px',
        alignItems: 'center',
    };

    const stepDetailStyle = {
        fontSize: '14px',
        marginBottom: '4px',
        color: currColor ? '#fff' : '#000',
    };

    const stepSubDetailStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '12px',
        color: currColor ? '#888' : '#000',
    };

    const iconContainerStyle = {
        backgroundColor: currColor ? '#58595b' : '#dbe4ef',
        borderRadius: '16px',
        height: '32px',
        width: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const iconStyle = {
        color: currColor ? '#fff' : '#000',
        width: '16px',
    };

    return (
        <div style={containerStyle}>
            <div style={sectionStyle}>
                <p style={titleStyle}>Lead Details</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={detailStyle}>
                    <p>Name</p>
                    <p>Orlando</p>
                </div>
                <div style={detailStyle}>
                    <p>Contact No</p>
                    <p>+53 4245252354</p>
                </div>
                <div style={detailStyle}>
                    <p>Email ID</p>
                    <p>orladom@gmail.com</p>
                </div>
                <div style={detailStyle}>
                    <p>Linkedin</p>
                    <p>linkedin.com/in/timvadde/</p>
                </div>
                <div style={detailStyle}>
                    <p>Company Name</p>
                    <p>Reachinbox</p>
                </div>
            </div>

            <div style={sectionStyle}>
                <p style={activityStyle}>Activities</p>
                <div style={activityContainerStyle}>
                    <div style={activityStyle}>Campaign Name</div>
                    <div style={{ display: 'flex', gap: '8px', fontSize: '12px' }}>
                        <div style={{ borderRight: `1px solid ${currColor ? '#888' : '#ccc'}`, paddingRight: '8px' }}>
                            <span style={{ fontWeight: 'normal' }}>3</span> Steps
                        </div>
                        <div><span style={{ fontWeight: 'normal' }}>8</span> Days in Sequence</div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div style={stepStyle}>
                            <div style={iconContainerStyle}>
                                <Mail style={iconStyle} />
                            </div>
                            <div>
                                <div style={stepDetailStyle}>Step 1: Email</div>
                                <div style={stepSubDetailStyle}>
                                    <Mail style={iconStyle} />
                                    <div>Sent <span style={{ fontWeight: 'normal' }}>5th, March</span></div>
                                </div>
                            </div>
                        </div>

                        <div style={stepStyle}>
                            <div style={iconContainerStyle}>
                                <Mail style={iconStyle} />
                            </div>
                            <div>
                                <div style={stepDetailStyle}>Step 2: Email</div>
                                <div style={stepSubDetailStyle}>
                                    <Mail style={iconStyle} />
                                    <div>Opened <span style={{ fontWeight: 'normal' }}>1st, March</span></div>
                                </div>
                            </div>
                        </div>

                        <div style={stepStyle}>
                            <div style={iconContainerStyle}>
                                <Mail style={iconStyle} />
                            </div>
                            <div>
                                <div style={stepDetailStyle}>Step 3: Email</div>
                                <div style={stepSubDetailStyle}>
                                    <Mail style={iconStyle} />
                                    <div>Opened <span style={{ fontWeight: 'normal' }}>1st, March</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
