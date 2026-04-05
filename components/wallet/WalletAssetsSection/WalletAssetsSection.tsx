import type {WalletAsset} from  "./Wallet.type";
import WalletAssetRow from "./WalletAssetRow";
import classes from "./WalletAssetsSection.module.css";

type WalletAssetsSectionProps = {
  assets: WalletAsset[];
};


export default function WalletAssetsSection({assets} : WalletAssetsSectionProps){
    return (
        <section className={classes.assetsSectionWrapper}>
            <div className={classes.assetsSectionCard}>
                <div className={classes.tableHeader}>
                    <span>Coin</span>
                    <span>Amount</span>
                    <span>Available</span>
                    <span>Action</span>
                </div>
                <div className = {classes.rows}>
                    {assets.map((asset) => (
                        <WalletAssetRow key={asset.id} asset={asset}/>
                    ))}
                </div>
            </div>
        </section>
    )
}