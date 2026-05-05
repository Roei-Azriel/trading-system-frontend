import classes from './HistoryOrderBook.module.css';
import { HistoryOrderBookRowType } from './historyOrderBook.type';

type HistoryOrderBookRowProps = {
    trade: HistoryOrderBookRowType;
}

export default function HistoryOrderBookRow({ trade }: HistoryOrderBookRowProps) {
    const formattedPrice = trade.price.toFixed(2);
    const formattedAmount = trade.amount.toFixed(5);
    const priceColorClass = trade.side === 'bid' ? classes.bidPriceText : classes.askPriceText;

    return (
        <div className={classes.historyOrderBookRow}>
            <div className={`${classes.priceColumn} ${priceColorClass}`}>{formattedPrice}</div>
            <div className={classes.amountColumn}>{formattedAmount}</div>
            <div className={classes.timeColumn}>{trade.time}</div>
        </div>
    )
}
