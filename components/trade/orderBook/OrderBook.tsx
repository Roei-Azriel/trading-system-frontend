import classes from './OrderBook.module.css';
import OrderBookAsks from './OrderBookAsks';
import OrderBookAskRow from './OrderBookAskRow';
import OrderBookBidRow from './OrderBookBidRow';
import OrderBookDepthBar from './OrderBookDepthBar';

export default function OrderBook(){

    const asks = [
        { price: 71514.74, amount: 0.00007 },
        { price: 71514.73, amount: 0.00008 },
        { price: 71514.24, amount: 0.00016 },
        { price: 71514.23, amount: 0.00008 },
        { price: 71514.0, amount: 0.0012 },
        { price: 71513.97, amount: 0.00007 },
        { price: 71513.84, amount: 0.0033 },
        { price: 71513.75, amount: 0.00008 },
        { price: 71513.72, amount: 0.05008 },
    ];

    const bids = [
        { price: 71513.71, amount: 0.00016 },
        { price: 71513.59, amount: 0.00855 },
        { price: 71513.58, amount: 0.01909 },
        { price: 71513.57, amount: 0.00016 },
        { price: 71512.20, amount: 0.00008 },
        { price: 71512.05, amount: 0.00070 },
        { price: 71512.01, amount: 0.01008 },
        { price: 71512.00, amount: 0.00128 },
        { price: 71511.99, amount: 0.02404 },
    ];

    const totalBidAmount = bids.reduce((sum, row) => sum + row.amount, 0);
    const totalAskAmount = asks.reduce((sum, row) => sum + row.amount, 0);
    const totalDepthAmount = totalBidAmount + totalAskAmount;

    const bidPercent = totalDepthAmount === 0 ? 0 : (totalBidAmount / totalDepthAmount) * 100;
    const askPercent = totalDepthAmount === 0 ? 0 : (totalAskAmount / totalDepthAmount) * 100;

    return (
        <div className={classes.orderBook}>
            <div className={classes.orderBookHeader}>
                <h2>Order Book</h2>
            </div>
            <div className={classes.bids}>
                <OrderBookAsks/>
                {asks.map((row,index) =>(
                    <OrderBookAskRow key={index} assets={row}/>    
                ))}
            </div>
            <div className={classes.lastPrice}>

            </div>
            <div className={classes.asks}>
                <OrderBookAsks/>
                {bids.map((row,index) =>(
                    <OrderBookBidRow key={index} assets={row}/>
                ))}

            </div>
            <OrderBookDepthBar bidPercent={bidPercent} askPercent={askPercent} />

        </div>
    )

}
