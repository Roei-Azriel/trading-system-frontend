import TradingGraph from "@/components/trade/graph/TradingGraph";
import HistoryOrderBook from "@/components/trade/HistoryOrderBook/HistoryOrderBook";
import OrderBook from '@/components/trade/orderBook/OrderBook';
import CoinSelector from "@/components/trade/CoinSelector/CoinSelector";
import classes from './trade.module.css';


export default function Home(){
    return(
        <div className={classes.tradeLayout}>
            <div>
                <OrderBook/>
            </div>
            <div className= {classes.chartPanel}>
                <TradingGraph/>
            </div>
            <div className={classes.rightColumn}>
                <CoinSelector/>
                <HistoryOrderBook/>
            </div>
        </div>
    )
}
