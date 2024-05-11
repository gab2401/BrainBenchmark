import { FC } from 'react';

import "../css/App.css"

import Robottino from '../img/head.png';
import Button from "./button.tsx";

interface HolaPropsI {
    setPageIndex: (pageIndex: number) => void
}

const Hola: FC <HolaPropsI> = ({setPageIndex}) => {

    // @ts-ignore
    return (
        <div className="container">
            <div className="image">
                <img src={Robottino} alt="Robottino" className="centeredImage"/>
            </div>
            <h1>Welcome to</h1>
            <h2>BrainBenchMark</h2>
            <div className="buttons">
                <Button buttonText='Login' setPageIndex={setPageIndex} pageIndex={1}/>
                <Button buttonText='Signup' setPageIndex={setPageIndex} pageIndex={2}/>
            </div>
        </div>
    );
}

export default Hola;
