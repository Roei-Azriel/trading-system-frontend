import classes from './HistoryOrderBook.module.css';
import HistoryOrderBookHeader from './HistoryOrderBookHeader';
import HistoryOrderBookRow from './HistoryOrderBookRow';

export default function HistoryOrderBook() {
    const historyRows = [
        { price: 71206.45, amount: 0.10117, time: '22:19:17', side: 'ask' as const },
        { price: 71206.46, amount: 0.06224, time: '22:19:16', side: 'bid' as const },
        { price: 71206.45, amount: 0.00737, time: '22:19:16', side: 'ask' as const },
        { price: 71206.46, amount: 0.00042, time: '22:19:13', side: 'bid' as const },
        { price: 71206.44, amount: 0.01891, time: '22:19:12', side: 'ask' as const },
        { price: 71206.46, amount: 0.00488, time: '22:19:11', side: 'bid' as const },
        { price: 71206.47, amount: 0.00925, time: '22:19:09', side: 'bid' as const },
        { price: 71206.45, amount: 0.00213, time: '22:19:07', side: 'ask' as const },
        { price: 71206.44, amount: 0.01502, time: '22:19:04', side: 'ask' as const },
        { price: 71206.45, amount: 0.02144, time: '22:19:03', side: 'bid' as const },
        { price: 71206.43, amount: 0.00417, time: '22:19:01', side: 'ask' as const },
        { price: 71206.44, amount: 0.00892, time: '22:18:59', side: 'bid' as const },
        { price: 71206.42, amount: 0.01308, time: '22:18:57', side: 'ask' as const },
    ];

    return (
        <div className={classes.historyOrderBook}>
            <div className={classes.historyOrderBookHeader}>
                <h2>Market Trades</h2>
            </div>
            <div className={classes.historyOrderBookBody}>
                <HistoryOrderBookHeader />
                {historyRows.map((row, index) => (
                    <HistoryOrderBookRow key={index} trade={row} />
                ))}
            </div>
        </div>
    )
}
