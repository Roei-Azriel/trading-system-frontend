import classes from './OrderBook.module.css';

type OrderBookDepthBarProps = {
    bidPercent: number;
    askPercent: number;
}

export default function OrderBookDepthBar({ bidPercent, askPercent } : OrderBookDepthBarProps) {
    return (
        <div className={classes.depthBar}>
            <div className={classes.depthBarContent}>
                <span className={classes.bidDepthLabel}>B {bidPercent.toFixed(2)}%</span>
                <div className={classes.depthBarTrack}>
                    <div className={classes.bidDepthFill} style={{ width: `${bidPercent}%` }} />
                    <div className={classes.askDepthFill} style={{ width: `${askPercent}%` }} />
                </div>
                <span className={classes.askDepthLabel}>{askPercent.toFixed(2)}% S</span>
            </div>
        </div>
    )
}
