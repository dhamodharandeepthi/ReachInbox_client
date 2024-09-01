import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    useEffect(() => {
        localStorage.removeItem("reachinbox-auth");
        localStorage.removeItem("reachinbox-auth-firstname");
        localStorage.removeItem("reachinbox-auth-lastname");
        localStorage.removeItem("reachinbox-auth-email");
    }, []);

    const containerStyle = {
        backgroundColor: 'black',
        maxWidth: '1440px',
        height: '100vh',
        margin: 'auto',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    };

    const headerStyle = {
        width: '100%',
        height: '64px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #2D2D2D'
    };

    const logoStyle = {
        height: '28px'
    };

    const formContainerStyle = {
        width: '460px',
        margin: 'auto',
        height: 'auto',
        maxHeight: '312px',
        backgroundColor: '#111214',
        borderRadius: '12px',
        border: '1px solid #4A4A4A',
        padding: '24px'
    };

    const formHeaderStyle = {
        width: '380px',
        margin: 'auto',
        fontSize: '20px',
        marginBottom: '24px'
    };

    const socialButtonStyle = {
        borderRadius: '4px',
        border: '1px solid #4A4A4A',
        height: '48px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '24px'
    };

    const socialIconStyle = {
        height: '20px'
    };

    const createAccountButtonStyle = {
        width: '195px',
        height: '48px',
        backgroundColor: '#4B63DD',
        borderRadius: '8px',
        margin: 'auto',
        textAlign: 'center',
        paddingTop: '10px',
        marginBottom: '24px',
        cursor: 'pointer',
        color: 'white'
    };

    const footerStyle = {
        width: '100%',
        height: '32px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #2D2D2D'
    };

    return (
        <div style={containerStyle}>
            <div style={headerStyle}>
                <img
                    src="https://s3-alpha-sig.figma.com/img/37f3/2626/1680d9613629542a2474f79f92f7c022?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ExDHJzIbIg-VW1nGMW3-eJ9CNLPdVNSVMokBbJOrtIVi3755XAtardu7TqGztt-n-RC5O0cas5OrR3ngwBiJuftHiaFSgyVuOCkPU~eD09ktGTpihJfYaAfTAA1C-jcizylPTzk7hAuLKZSa4weUTCqU3ZQHeHxOtPyKg2fTGjmBCtMF7qfnWQM1YtUxs5s-lTn6QaGFVvB6UchGHf7Z2SwWdfRfYmBOwM9oXRGbfaHALEXuM2XcFGEk3aTx1HVxNIwgnXGqgjMul5~bo2~gommPavsKripEo5HVO-W-nEFyu5Dy7BHh0afOYCF1i9N39mgcz9k89cmrwUA2rxP~MA__"
                    alt="reachinbox-logo"
                    style={logoStyle}
                />
            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={formContainerStyle}>
                    <div style={formHeaderStyle}>
                        <p>Create new account</p>
                        <div style={socialButtonStyle}>
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/013/760/951/non_2x/colourful-google-logo-in-dark-background-free-vector.jpg"
                                alt="Google Logo"
                                style={socialIconStyle}
                            />
                            <Link
                                to="https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://reachinbox-frontend.netlify.app/desktop"
                                style={{ color: '#9CA3AF', fontSize: '14px', textDecoration: 'none' }}
                            >
                                Sign Up with Google
                            </Link>
                        </div>
                        <p style={createAccountButtonStyle}>Create an account</p>
                        <p style={{ textAlign: 'center', color: '#6B7280' }}>
                            Already have an account? <span style={{ color: '#4B63DD' }}>Sign In</span>
                        </p>
                    </div>
                </div>
            </div>
            <div style={footerStyle}>
                <p style={{ color: '#6B7280', fontSize: '12px' }}>©️ 2024 Reachinbox. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Login;
