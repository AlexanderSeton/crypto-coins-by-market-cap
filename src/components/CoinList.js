import React from "react";
import Coin from "./Coin.js";
import "./static/CoinList.css";
import logo from "../logo.svg";

const CoinList = ({coins}) => {

    const coinsItems = coins.map((coin, index) => {
        return <Coin coin={coin} key={index} />
    })

    return(
        <div>
            <nav id="menu-bar">
                <div id="logo-title">
                    <img src={logo} alt="Logo" height="65px" width="65px" id="logo" />
                    <h1 id="title">Crypto Data</h1>
                </div>
                <hr />
            </nav>
            <h2 id="sub-title">Coins by market cap</h2>
            <ul className="song-list">
                {coinsItems}
            </ul>
        </div>
    )
}

export default CoinList;
