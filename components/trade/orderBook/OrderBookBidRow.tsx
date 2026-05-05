import classes from './OrderBook.module.css';
import { BidRow } from './orderBook.type';

type OrderBookBidRowProps = {
    assets : BidRow;
}

export default function OrderBookBidRow({assets} : OrderBookBidRowProps) {

    const formattedPrice = assets.price.toFixed(2);
    const formattedAmount = assets.amount.toFixed(5);

    const formattedTotal = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        notation: "compact"
    }).format(assets.price * assets.amount);


    return (
         <div className={classes.OrderBookBidRow}>
            <div className={`${classes.priceColumn} ${classes.bidPriceText}`}>{formattedPrice}</div>
            <div className={classes.amountColumn}>{formattedAmount}</div>
            <div className={classes.totalColumn}>{formattedTotal}</div>
        </div>
    )
}
