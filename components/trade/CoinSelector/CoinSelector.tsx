import classes from './CoinSelector.module.css';

export default function CoinSelector(){
    const pairs = [
        { pair: "BTC/USDT", lastPrice: "71,206.45", change24h: "+2.14%" },
        { pair: "ETH/USDT", lastPrice: "3,842.18", change24h: "-1.08%" },
    ];

    return (
        <div className={classes.coinSelector} >
            <div className={classes.coinSelectorHeader}>
                <h2>Coin Selector</h2>
            </div>
            <div className={classes.coinSelectorBody}>
                <div className={classes.coinSelectorColumnsHeader}>
                    <div className={classes.pairColumn}>Pair</div>
                    <div className={classes.lastPriceColumn}>Last Price</div>
                    <div className={classes.changeColumn}>24 Chg</div>
                </div>
                {pairs.map((coin) => (
                    <div key={coin.pair} className={classes.coinSelectorRow}>
                        <div className={classes.pairColumn}>{coin.pair}</div>
                        <div className={classes.lastPriceColumn}>{coin.lastPrice}</div>
                        <div className={`${classes.changeColumn} ${coin.change24h.startsWith("+") ? classes.positiveChange : classes.negativeChange}`}>
                            {coin.change24h}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
