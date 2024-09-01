import React, { useEffect, useState } from 'react';
import Slidebar from '../components/Slidebar';
import Theme from '../components/Theme';
import Workspace from '../components/Workspace';
import { useLocation } from 'react-router';
import { ChevronDown } from 'lucide-react';
import { deleteMailResponse, getMailList, getMailMasseges } from '../actions/actions';
import InboxEmailCard from '../components/InboxEmailCard';
import InboxHeader from '../components/InboxHeader';
import LoadingPage from '../components/LoadingPage';
import SearchBar from '../components/SearchBar';
import UserDetails from '../components/UserDetails';
import ReplySection from '../components/ReplySection';
import Modal from './Modal';

const parseJwt = (token) => {
    try {
        const base64Url = token.split('.')[1];
        const base64 = decodeURIComponent(atob(base64Url).replace(/!/g, ''));
        return JSON.parse(base64);
    } catch (e) {
        console.error('Error parsing JWT token:', e);
        return null;
    }
};

const Desktop = () => {
    const [currColor, setCurrColor] = useState(true);
    const [data, setData] = useState([]);
    const [singleMail, setSingleMail] = useState({});
    const [render, setRender] = useState(false);
    const location = useLocation();
    const [showEmailDesktop, setShowEmailDesktop] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    let token = localStorage.getItem("reachinbox-auth") || takeToken();

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const fetchData = () => {
        getMailList(token).then(res => {
            console.log(res);
            setData(res);
            if (res?.length > 0) {
                setSingleMail(res[0]);
                const id = res[0]?.threadId;
                if (id !== undefined) return getMailMasseges(id);
                else console.log("error id not found");
            } else console.log("Email not Found");
        }).then(messages => setSingleMail(messages))
            .catch(error => console.error('Error:', error));
    }

    useEffect(() => {
        token = location.search.split("?token=")?.join("");
        if (token) {
            const ParseData = parseJwt(token);
            localStorage.setItem("reachinbox-auth", token);
            localStorage.setItem("reachinbox-auth-firstname", JSON.stringify(ParseData.user.firstName));
            localStorage.setItem("reachinbox-auth-lastname", JSON.stringify(ParseData.user.lastName));
            localStorage.setItem("reachinbox-auth-email", JSON.stringify(ParseData.user.email));
        }
        fetchData();
    }, [token, render]);

    function takeToken() {
        try {
            const token = localStorage.getItem("reachinbox-auth");
            return token ? JSON.parse(token) : "";
        } catch (e) {
            console.log("Error:", e);
            return "";
        }
    }

    const handleChangeEmail = (id) => {
        getMailMasseges(id).then(messages => {
            setSingleMail(messages);
        }).catch(error => console.error('Error:', error));
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "d" || event.key === "D") {
                openModal();
            }
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isModalOpen]);

    const handleChange = (index) => setShowEmailDesktop(index);

    const deleteEmail = () => {
        const id = singleMail[0]?.threadId;
        deleteMailResponse(id).then(() => {
            alert(`The ${id} has been Deleted Successfully`);
            setRender(!render);
            closeModal();
        }).catch(err => alert("Error Please try again"));
    }

    let firstName = localStorage.getItem('reachinbox-auth-firstname');
    firstName = firstName ? JSON.parse(firstName) : '';
    let lastName = localStorage.getItem('reachinbox-auth-lastname');
    lastName = lastName ? JSON.parse(lastName) : '';
    const username = firstName ? (firstName[0] + (lastName ? lastName[0] : '')) : '';

    const containerStyle = {
        width: '100%',
        height: '100%',
        margin: 'auto',
        maxWidth: '1440px',
        display: 'flex',
        backgroundColor: currColor ? 'black' : 'white',
        color: currColor ? 'white' : 'black'
    };

    const headerStyle = {
        height: '64px',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '16px 32px',
        backgroundColor: currColor ? '#1F1F1F' : 'white',
        border: `1px solid ${currColor ? 'gray' : 'lightgray'}`
    };

    const sidebarStyle = {
        width: '56px',
        height: '100vh'
    };

    const mainContentStyle = {
        width: 'calc(100% - 56px)',
        maxWidth: '1383px',
        display: 'flex',
        flexDirection: 'column'
    };

    const inboxSectionStyle = {
        display: 'flex',
        border: `1px solid ${currColor ? 'gray' : 'lightgray'}`
    };

    const sidebarHeaderStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        marginTop: '32px'
    };

    const modalStyle = {
        width: '440px',
        height: '240px',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    };

    return (
        <div style={containerStyle}>
            <div style={sidebarStyle}>
                <Slidebar currColor={currColor} username={username} showEmailDesktop={showEmailDesktop} handleChange={handleChange} />
            </div>
            <div style={mainContentStyle}>
                <div style={headerStyle}>
                    <p style={{ fontSize: '20px' }}>Onebox</p>
                    <div style={{ width: '210px', height: '32px', marginRight: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
                        <Theme currColor={currColor} onClick={() => setCurrColor(!currColor)} />
                        <Workspace />
                    </div>
                </div>
                {
                    showEmailDesktop !== 5 ? <LoadingPage /> :
                        <div style={inboxSectionStyle}>
                            <div style={{ width: '275px', marginLeft: '20px', paddingRight: '12px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px', alignItems: 'center' }}>
                                    <InboxHeader currColor={currColor} />
                                </div>
                                <p style={{ textAlign: 'left', fontSize: '14px', marginTop: '10px' }}>25/25 <span style={{ color: '#7F7F7F' }}>Inboxes selected</span></p>
                                <div style={{ marginTop: '8px', height: '44px' }}>
                                    <SearchBar currColor={currColor} />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <p style={{ backgroundColor: currColor ? '#25262B' : '#e1e7ee', color: 'blue', width: '32px', height: '28px', paddingTop: '2px', borderRadius: '16px' }}>26</p>
                                        <p>New Replies</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <p>Newest</p>
                                        <ChevronDown />
                                    </div>
                                </div>
                                <hr style={{ marginTop: '10px' }} />
                                <div style={{ textAlign: 'left' }}>
                                    {
                                        data?.length > 0 && data.map((item) => (
                                            <div key={item.id}>
                                                <InboxEmailCard currColor={currColor} {...item} handleChangeEmail={handleChangeEmail} />
                                                <hr />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <ReplySection currColor={currColor} singleMail={singleMail} />
                            <UserDetails currColor={currColor} />
                        </div>
                }
            </div>
            <div>
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <div style={modalStyle}>
                        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <h1>Are you sure you want to delete this email?</h1>
                            <div style={{ marginTop: '20px' }}>
                                <button onClick={deleteEmail} style={{ marginRight: '20px' }}>Yes</button>
                                <button onClick={closeModal}>No</button>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
}

export default Desktop;
