import React, { useState } from 'react';

import "../css/login.css"
import Robot from "../img/head.png"

interface LoginProps {
    onLogin: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Chiamata alla funzione di gestione del login fornita tramite le props
        onLogin(username, password);
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

                <h2>Login</h2>
                <form>
                    <div>
                        <label className="form-label" htmlFor="username">Username:</label>
                        <input className="form-input" type="text" id="username" name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="form-label" htmlFor="password">Password:</label>
                        <input className="form-input" type="password" id="password" name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="butt1">
                        <button type="button" onClick={handleLogin}>Accedi</button>
                    </div>

                </form>
            </div>
        </>
    );
};

export default Login;
