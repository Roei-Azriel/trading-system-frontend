import classes from './OrderBook.module.css'; 

export default function OrderBookAsks() {
    return (
        <div className={classes.orderBookColumnsHeader}>
            <div className={classes.priceColumn}>Price</div>
            <div className={classes.amountColumn}>Amount</div>
            <div className={classes.totalColumn}>Total</div>
        </div>
        
    )
}
