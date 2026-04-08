import classes from './OrderBook.module.css';
import OrderBookAsks from './OrderBookAsks';

export default function TradingGraph(){
    return (
        <div className={classes.orderBook}>
            <div className={classes.orderBookHeader}>
                <h2>Order Book</h2>
            </div>
            <div className={classes.bids}>
                <OrderBookAsks/>
            </div>
            <div className={classes.lastPrice}>

            </div>
            <div className={classes.asks}>

            </div>
            <div className={classes.depthBar}>

            </div>

        </div>
    )

}