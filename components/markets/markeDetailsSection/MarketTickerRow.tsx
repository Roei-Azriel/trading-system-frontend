import classes from './marketDetailsSection.module.css';
import Image from 'next/image';
import BTC from '@/assets/btc.svg';
import ETH from '@/assets/eth.svg';
import USDT from '@/assets/usdt.svg';
import { MarketTableRow } from './markets.type';

const coinIcons = {
  BTC: BTC,
  ETH: ETH,
  USD: USDT,
};

type MarketTickerRowProps = {
  asset: MarketTableRow;
};


export default function MarketTickerRow({asset}: MarketTickerRowProps){
    const icon = coinIcons[asset.asset as keyof typeof coinIcons];
    const changeClass = asset.changePercent >= 0 ? classes.changePositive : classes.changeNegative;
    const formattedPrice = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: asset.price < 10000 ? 2 : 0,
        maximumFractionDigits: asset.price < 10000 ? 4 : 0,
    }).format(asset.price);
    const formattedChange = `${asset.changePercent >= 0 ? "+" : ""}${asset.changePercent.toFixed(2)}%`;
    const formattedVolume = new Intl.NumberFormat("en-US", {
        notation: "compact",
        maximumFractionDigits: 2,
    }).format(asset.volume24h);
    const pairLabel = `${asset.asset}/USDT`;

    return(
        <div className={classes.assetRow}>
            <div className={classes.coinCell}>
                <div>
                    <Image className={classes.coinLogo} src ={icon} alt= "coin logo"/>
                </div>
                <div>
                    <p className={classes.coinSymbol}><strong>{asset.asset}</strong></p>
                    <p className={classes.coinPair}>{pairLabel}</p>
                </div>
            </div>
            <div className={classes.amountCell}>
                <p className={classes.metricStrong}>${formattedPrice}</p>
                <p className={classes.metricSubtle}>Last price</p>
            </div>
            <div className={classes.availableCell}>
                <p className={`${classes.metricStrong} ${changeClass}`}>{formattedChange}</p>
                <p className={classes.metricSubtle}>24h change</p>
            </div>
            <div className={classes.tickerVolume}>
                <p className={classes.metricStrong}>{formattedVolume}</p>
                <p className={classes.metricSubtle}>Quoted in USDT</p>
            </div>
            <div className={classes.actionCell}>
                <div>
                    <button className={classes.actionButton}>Detail</button>
                </div>
                <div>
                    <button className={classes.actionButton}>Trade</button>
                </div>
            </div>
        </div>
    );
}
