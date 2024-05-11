import '../css/login.css'

import {FC, useState} from 'react';
import axios from 'axios';
import Robot from "../img/head.png"; //Richieste HTTP


const Registrazione:FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [, setMessage] = useState('');

    //Gestisce la registrazione
    const handleLogin = async () => {
        try {
            const response = await axios.post('/signup', { username, password, email });
            if (response.status === 200) {
                setMessage('Registration successful');
            } else {
                setMessage('Registration failed');
            }
        } catch (error) {
            console.error('Error signing up', error);
            setMessage('An error occurred');
        }
    };

    return (
        <>
            <div className="header">
                <h1>BrainBenchMark</h1>
            </div>

            <div className="containerl">

                <div className="img1">
                    <img src={Robot} alt="Robottino" className="centeredImage" height={200}/>
                </div>

                <h2>SignUp</h2>
                <form>
                    <div>
                        <label className="form-label" htmlFor="username">Email</label>
                        <input className="form-input" type="text" id="email" name="email"
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="form-label" htmlFor="username">Username</label>
                        <input className="form-input" type="text" id="username" name="username"
                               value={username}
                               onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="form-label" htmlFor="password">Password</label>
                        <input className="form-input" type="password" id="password" name="password"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="butt1">
                        <button type="button" onClick={handleLogin}>Signup</button>
                    </div>

                </form>
            </div>
        </>
    );
};

export default Registrazione;

