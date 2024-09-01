import { ChevronDown, Eye, X, Zap } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { postMailMasseges } from '../actions/actions';

const initialState = {
    toName: "",
    to: "",
    from: "",
    fromName: "",
    subject: "",
    body: ""
};

const SendReply = ({ currColor, handleCancel, singleMail }) => {
    const [formData, setFormData] = useState(initialState);
    let token;

    useEffect(() => {
        token = localStorage.getItem("reachinbox-auth");
        token = token ? JSON.parse(token) : "";
        console.log("token :-", token);

        setFormData({
            ...formData,
            toName: singleMail.toName,
            fromName: singleMail.fromEmail,
            to: singleMail.toEmail,
            from: singleMail.fromEmail
        });
    }, [singleMail]);

    const handleSubmit = () => {
        console.log(formData, "data");
        postMailMasseges(singleMail.threadId, formData)
            .then((res) => {
                alert("Reply has been sent");
            })
            .catch(err => console.log(err));
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
    };

    const headerStyle = {
        height: '40px',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 16px',
        alignItems: 'center',
        fontSize: '16px',
        backgroundColor: currColor ? '#23272C' : 'white',
    };

    const inputStyle = {
        backgroundColor: currColor ? '#141517' : 'white',
        border: 'none',
        outline: 'none',
        height: '28px',
        width: '100%',
    };

    const textareaStyle = {
        backgroundColor: currColor ? '#141517' : 'white',
        border: 'none',
        outline: 'none',
        height: '250px',
        width: '500px',
    };

    const buttonContainerStyle = {
        height: '54px',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    };

    const buttonStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '32px',
        width: '100px',
        borderRadius: '4px',
        margin: '4px',
        cursor: 'pointer',
    };

    return (
        <div style={containerStyle}>
            <div>
                <div style={headerStyle}>
                    <p>Reply</p>
                    <p onClick={handleCancel} style={{ cursor: 'pointer' }}><X /></p>
                </div>
                <hr style={{ borderTop: '1px solid gray' }} />
                <div style={{ fontSize: '12px', height: '28px', display: 'flex', padding: '8px', alignItems: 'center', gap: '8px' }}>
                    <p style={{ color: 'gray' }}>To:</p>
                    <input
                        type="text"
                        placeholder=''
                        value={formData.to}
                        style={inputStyle}
                        onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                    />
                </div>
                <hr style={{ borderTop: '1px solid gray' }} />
                <div style={{ fontSize: '12px', height: '28px', display: 'flex', padding: '8px', alignItems: 'center', gap: '8px' }}>
                    <p style={{ color: 'gray' }}>From:</p>
                    <input
                        type="text"
                        placeholder=''
                        value={formData.from}
                        style={inputStyle}
                        onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                    />
                </div>
                <hr style={{ borderTop: '1px solid gray' }} />
                <div style={{ fontSize: '12px', height: '28px', display: 'flex', padding: '8px', alignItems: 'center', gap: '8px' }}>
                    <p style={{ color: 'gray' }}>Subject:</p>
                    <input
                        type="text"
                        placeholder=''
                        value={formData.subject}
                        style={inputStyle}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                </div>
                <hr style={{ borderTop: '1px solid gray' }} />
                <div style={{ fontSize: '12px', padding: '8px', textAlign: 'left' }}>
                    <textarea
                        placeholder='Hello John...'
                        value={formData.body}
                        style={textareaStyle}
                        onChange={(e) => setFormData({ ...formData, body: e.target.value })}
                    />
                </div>
            </div>
            <div style={buttonContainerStyle}>
                <hr style={{ borderTop: '1px solid gray', marginBottom: '8px' }} />
                <div style={{ fontSize: '12px', display: 'flex', gap: '8px' }}>
                    <div style={{ ...buttonStyle, backgroundColor: '#4B63DD', color: 'white' }} onClick={handleSubmit}>
                        <button style={{ background: 'none', border: 'none', color: 'white' }}>Send</button>
                        <ChevronDown color="white" />
                    </div>
                    <div style={{ ...buttonStyle }}>
                        <Zap style={{ height: '16px' }} />
                        <button style={{ background: 'none', border: 'none' }}>Variables</button>
                    </div>
                    <div style={{ ...buttonStyle }}>
                        <Eye style={{ height: '16px' }} />
                        <button style={{ background: 'none', border: 'none' }}>Preview Email</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SendReply;
