import React, { useEffect, useState } from "react";
import CoinList from "../components/CoinList";

const CoinContainer = () => {

    const [coins, setCoins] = useState([]);

    useEffect(() => {
        getCoins();
    }, [])

    const getCoins = function() {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp")
            .then(response => response.json())
            .then(data => setCoins(data))
    }

    return(
        <div>
            <CoinList coins={coins} />
        </div>
    )
}

export default CoinContainer;
