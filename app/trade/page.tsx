import TradingGraph from "@/components/trade/TradingGraph";
import classes from './trade.module.css';

export default function Home(){
    return(
        <div className={classes.tradeLayout}>
            <div></div>
            <div className= {classes.chartPanel}>
                <TradingGraph/>
            </div>
            <div></div>
        </div>
    )
}