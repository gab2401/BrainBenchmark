import { FC }from 'react';

import Robottino0 from "../img/robottino.png";
import "../css/home_user.css";
import Game from "../game1/2048.tsx";

interface HomeuPropos{
    setPageIndex: (pageIndex: number) => void
}

const Homeu:FC<HomeuPropos> = ({}) =>{

    
    return (
        <>
         <div className="header">
        <h1>BrainBenchMark</h1>
         </div>

            <div className="container1">

                <button className="game1-button" onClick={Game}>2048</button>

                <div className="img0">
                    <img src={Robottino0}/>
                </div>

                <button className="game2-button" onClick={Game}>memory</button>

            </div>
        </>
    )

};

export default Homeu;