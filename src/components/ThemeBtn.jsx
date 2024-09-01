import React, { useState } from 'react';

const ThemeBtn = () => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    const wrapperStyle = {
        position: 'relative',
        display: 'inline-block',
        width: '60px',
        height: '30px'
    };

    const switchStyle = {
        position: 'relative',
        display: 'inline-block',
        width: '100%',
        height: '100%'
    };

    const sliderStyle = {
        position: 'absolute',
        cursor: 'pointer',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#ccc',
        transition: '.4s',
        borderRadius: '30px'
    };

    const sliderBeforeStyle = {
        position: 'absolute',
        content: '""',
        height: '24px',
        width: '24px',
        borderRadius: '50%',
        left: '3px',
        bottom: '3px',
        backgroundColor: 'white',
        transition: '.4s'
    };

    const checkedSliderStyle = {
        backgroundColor: '#666'
    };

    const checkedSliderBeforeStyle = {
        transform: 'translateX(30px)'
    };

    return (
        <div style={wrapperStyle} onClick={toggleCheckbox}>
            <input type="checkbox" style={{ display: 'none' }} checked={isChecked} onChange={() => { }} />
            <label style={switchStyle}>
                <span
                    style={{
                        ...sliderStyle,
                        ...(isChecked ? checkedSliderStyle : {})
                    }}
                >
                    <span
                        style={{
                            ...sliderBeforeStyle,
                            ...(isChecked ? checkedSliderBeforeStyle : {})
                        }}
                    />
                </span>
            </label>
        </div>
    );
};

export default ThemeBtn;
