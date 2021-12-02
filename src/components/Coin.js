import React from "react";
import "./static/Coin.css";

const Coin = ({coin}) => {

    const getPercentOfTotalSupply = function() {
        let output = (coin.circulating_supply/coin.total_supply)*100;
        if (output == "Infinity") {
            return "No Max Supply";
        } else {
            output = output.toFixed(2);
            return `${output}% Of Total Supply`;
        }
    }

    return(
        <li className="list-element" style={{ backgroundImage: `url(${coin.image})` }} >
            <div className="list-element-data">
                <h2 className="song-ranking">{coin.market_cap_rank}</h2>
                <p className="song-ranking">{coin.symbol.toUpperCase()}</p>
                <p><strong>{coin.name}</strong></p>
                <p><strong>£{coin.current_price}</strong></p>
                <p style={{ color: coin.price_change_percentage_24h >= 0 ? "green" : "red" }}><strong>24hr Change: {coin.price_change_percentage_24h}%</strong></p>
                <p>Circulating Supply: {coin.circulating_supply}</p>
                <p>{getPercentOfTotalSupply()}</p>
            </div>
        </li>
    )
}

export default Coin;
