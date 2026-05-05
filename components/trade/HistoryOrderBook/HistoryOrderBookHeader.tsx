import classes from './HistoryOrderBook.module.css';

export default function HistoryOrderBookHeader() {
    return (
        <div className={classes.historyOrderBookColumnsHeader}>
            <div className={classes.priceColumn}>Price</div>
            <div className={classes.amountColumn}>Amount</div>
            <div className={classes.timeColumn}>Time</div>
        </div>
    )
}
