import {FC, useEffect, useState} from 'react';

import "./css/App.css"

import Hola from "./unlogged/hola.tsx";
import Login from "./unlogged/login.tsx";
import Registrazione from "./unlogged/registrazione.tsx";
import Home_user from "./logged_user/home_user.tsx";


    const App: FC = () => {

        const [pageIndex,setPageIndex] = useState(0);
        const [/*username*/, setUsername] = useState("");
        const token = sessionStorage.getItem("jwtToken");

        useEffect(() => {
            if (token) setPageIndex(3);
        })

        const handleLogin = (username: string) => {
            setUsername(username);
            setPageIndex(3);
        }

        /*const handleLogout = () => {
            sessionStorage.removeItem("jwtToken");
            setUsername("");
            setPageIndex(0);
        };*/

    return(
        <>

            {pageIndex === 0 && !token && <Hola setPageIndex={setPageIndex}/>}
            {pageIndex === 1 && !token && <Login onLogin={handleLogin} />}
            {pageIndex === 2 && !token && <Registrazione/>}
            {pageIndex === 3 && <Home_user setPageIndex={setPageIndex}/>}

        </>
    )
    }

export default App;
