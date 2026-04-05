import classes from "./marketDetailsSection.module.css";
import { MarketTableRow } from "./markets.type";
import MarketTickerRow from "./MarketTickerRow";

type MarketTickerRowProps = {
  assets: MarketTableRow[];
};

export default function MarketDetailsSection({assets} : MarketTickerRowProps){
    return (
        <section className={classes.assetsSectionWrapper}>
            <div className={classes.assetsSectionCard}>
                <div className={classes.tableHeader}>
                    <span>Name</span>
                    <span>Price</span>
                    <span>Change</span>
                    <span>24h Volume</span>
                    <span>Actions</span>
                </div>
                <div className = {classes.rows}>
                    {assets.map((asset) => (
                        <MarketTickerRow key={asset.asset} asset={asset}/>
                    ))}
                </div>
            </div>
        </section>
    )
}