import React, { useState } from 'react';
import { BarChart2, Home, InboxIcon, List, Mail, Send, UserRoundSearchIcon } from 'lucide-react';
import Icon from './Icons';

const Slidebar = ({ currColor, username, handleChange }) => {
    const [activeIcon, setActiveIcon] = useState(0);

    const handleIconClick = (index) => {
        setActiveIcon(index);
        handleChange(index);
    };

    const containerStyle = {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '0 8px',
        backgroundColor: currColor ? '#101113' : 'white',
    };

    const logoContainerStyle = {
        width: '48px',
        height: '70px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const logoStyle = {
        width: '24px',
        height: '24px',
        borderRadius: '50%',
    };

    const iconContainerStyle = {
        paddingTop: '48px',
        paddingLeft: '8px',
        paddingRight: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
    };

    const iconStyle = (isActive) => ({
        color: currColor ? 'white' : 'black',
        backgroundColor: isActive ? (currColor ? '#222426' : '#f0f0f0') : 'transparent',
        borderRadius: '8px',
        padding: '8px',
        cursor: 'pointer',
    });

    const userContainerStyle = {
        width: '48px',
        height: '70px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const usernameStyle = {
        width: '32px',
        height: '32px',
        backgroundColor: '#4B63DD',
        borderRadius: '50%',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '14px',
        paddingLeft: '4px',
    };

    return (
        <div style={containerStyle}>
            <div>
                <div style={logoContainerStyle}>
                    <img
                        src="https://media.licdn.com/dms/image/D560BAQEmo1aZIhVtlQ/company-logo_200_200/0/1700158687336/reachinbox_ai_logo?e=2147483647&v=beta&t=2eGcwWsFtdBcUVJGGHkBxWHYFN86D-c5zfyr4s3DsNw"
                        alt="logo"
                        style={logoStyle}
                    />
                </div>
                <div style={iconContainerStyle}>
                    <Icon
                        currColor={currColor}
                        style={iconStyle(activeIcon === 0)}
                        onClick={() => handleIconClick(0)}
                    >
                        <Home />
                    </Icon>
                    <Icon
                        currColor={currColor}
                        style={iconStyle(activeIcon === 1)}
                        onClick={() => handleIconClick(1)}
                    >
                        <UserRoundSearchIcon />
                    </Icon>
                    <Icon
                        currColor={currColor}
                        style={iconStyle(activeIcon === 2)}
                        onClick={() => handleIconClick(2)}
                    >
                        <Mail />
                    </Icon>
                    <Icon
                        currColor={currColor}
                        style={iconStyle(activeIcon === 3)}
                        onClick={() => handleIconClick(3)}
                    >
                        <Send />
                    </Icon>
                    <Icon
                        currColor={currColor}
                        style={iconStyle(activeIcon === 4)}
                        onClick={() => handleIconClick(4)}
                    >
                        <List />
                    </Icon>
                    <Icon
                        currColor={currColor}
                        style={iconStyle(activeIcon === 5)}
                        onClick={() => handleIconClick(5)}
                    >
                        <InboxIcon />
                    </Icon>
                    <Icon
                        currColor={currColor}
                        style={iconStyle(activeIcon === 6)}
                        onClick={() => handleIconClick(6)}
                    >
                        <BarChart2 />
                    </Icon>
                </div>
            </div>

            <div style={userContainerStyle}>
                <p style={usernameStyle}>{username}</p>
            </div>
        </div>
    );
};

export default Slidebar;
