import TradingGraph from "@/components/trade/graph/TradingGraph";
import OrderBook from '@/components/trade/orderBook/OrderBook';
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
            <div></div>
        </div>
    )
}