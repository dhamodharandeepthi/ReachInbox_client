import { ChevronDown, Reply } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import SingleMail from './SingleMail';
import SendReply from './SendReply';

const ReplySection = ({ currColor, singleMail }) => {
    const [showReply, setShowReply] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'r' || event.key === 'R') {
                setShowReply(true);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [showReply]);

    const containerStyle = {
        width: '800px',
        height: '600px',
        border: '1px solid gray',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    };

    const headerStyle = {
        display: 'flex',
        height: '70px',
        borderBottom: '1px solid gray',
        padding: '12px 16px',
    };

    const buttonContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '8px',
        border: '1px solid gray',
        borderRadius: '4px',
        backgroundColor: currColor ? '#222426' : '#fff',
    };

    const replySectionStyle = {
        position: 'absolute',
        marginTop: '134px',
        width: '768px',
        marginLeft: '16px',
        borderRadius: '16px',
        zIndex: 10,
        overflow: 'hidden',
        height: '450px',
        backgroundColor: currColor ? '#141517' : 'white',
        border: '1px solid gray',
    };

    const replyButtonStyle = {
        width: '100px',
        height: '40px',
        backgroundColor: '#4B63DD',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '16px',
        marginBottom: '12px',
        borderRadius: '4px',
        gap: '8px',
    };

    const textSmallStyle = {
        fontSize: '12px',
    };

    const textGrayStyle = {
        fontSize: '12px',
        color: 'gray',
    };

    return (
        <div style={containerStyle}>
            <div style={{ ...containerStyle, flexDirection: 'column' }}>
                <div style={headerStyle}>
                    <div style={{ textAlign: 'left', width: '100%' }}>
                        <h1 style={{ fontSize: '14px' }}>{singleMail && singleMail[0]?.fromName}</h1>
                        <p style={textGrayStyle}>{singleMail && singleMail[0]?.toEmail}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '24px', gap: '16px', height: '32px', marginTop: '8px', width: '100%' }}>
                        <div style={buttonContainerStyle}>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'yellow' }}></div>
                            <p style={textSmallStyle}>Meeting Completed</p>
                            <ChevronDown />
                        </div>
                        <div style={buttonContainerStyle}>
                            <p style={textSmallStyle}>Move</p>
                            <ChevronDown style={{ height: '16px' }} />
                        </div>
                        <div style={buttonContainerStyle}>
                            <p style={{ marginBottom: '4px' }}>...</p>
                        </div>
                    </div>
                </div>
                <div style={{ padding: '12px 16px' }}>
                    {singleMail?.length > 0 && singleMail?.map((item) => (
                        <SingleMail currColor={currColor} {...item} key={item.id} />
                    ))}
                    <h2 style={{ fontSize: '10px', marginTop: '8px', marginBottom: '12px' }}>Today</h2>
                </div>
                {showReply && (
                    <div style={replySectionStyle}>
                        <SendReply currColor={currColor} singleMail={singleMail[0]} handleCancel={() => setShowReply(!showReply)} />
                    </div>
                )}
            </div>
            <div style={replyButtonStyle}>
                <Reply />
                <button style={{ color: 'blue' }} onClick={() => setShowReply(!showReply)}>Reply</button>
            </div>
        </div>
    );
};

export default ReplySection;
