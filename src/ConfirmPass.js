import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style/ConfirmPass.css'

const ConfirmPass = () => {
    const [password, setPassword] = useState('');
    const [Uid, setID] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [alldata, setData] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        get();
    }, []);


    function get() {
        let data = JSON.parse(localStorage.getItem('alldata'));
        let ids = JSON.parse(localStorage.getItem('id'));
        setData(data);
        setID(ids);
    }

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        setPasswordMatch(newPassword === confirmPassword);
    };

    const handleConfirmPasswordChange = (event) => {
        const newConfirmPassword = event.target.value;
        setConfirmPassword(newConfirmPassword);
        setPasswordMatch(password === newConfirmPassword);
    };


    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (password === confirmPassword) {
            let alldata = JSON.parse(localStorage.getItem('alldata'));

            const objIndex = alldata.findIndex((obj) => obj.CorUserid === Uid);

            alldata[objIndex].pass = password;

            setData(alldata);

            localStorage.setItem('alldata', JSON.stringify(alldata));

            setPassword('');
            setConfirmPassword('');

            navigate('/')
        }
        else {
            alert('Passwords do not match');
        }
    };


    return (
        <div style={{ textAlign: 'center' }}>
            <form className='divs'>
                <div>
                    <label htmlFor="password">Enter Password:</label>
                    <input
                        className='inputtag'
                        type="password"
                        id="password"
                        placeholder='Enter Password'
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div className='mt-4'>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        className='inputtag'
                        type="password"
                        id="confirmPassword"
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />
                </div>
                {passwordMatch ? (
                    <h5>Passwords Match</h5>
                ) : (
                    <h5>Passwords Do Not Match</h5>
                )}
                <button className='buttontag' onClick={handleFormSubmit} type="submit">Set Password</button>
            </form>
        </div>
    );
};

export default ConfirmPass;
