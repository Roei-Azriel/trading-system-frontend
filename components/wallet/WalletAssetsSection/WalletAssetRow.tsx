import { assert } from "console";
import classes from './WalletAssetsSection.module.css';
import type { WalletAsset } from "./Wallet.type";
import Image from 'next/image';
import BTC from '@/assets/btc.svg';
import ETH from '@/assets/eth.svg';
import USDT from '@/assets/usdt.svg';


type WalletAssetRowProps = {
    asset:WalletAsset;
}

const coinIcons = {
  BTC: BTC,
  ETH: ETH,
  USDT: USDT,
};

export default function WalletAssetRow({asset} : WalletAssetRowProps){
    const icon = coinIcons[asset.symbol as keyof typeof coinIcons];
    return(
        <div className={classes.assetRow}>
            <div className={classes.coinCell}>
                <div>
                    <Image className={classes.coinLogo} src ={icon} alt= "coin logo"/>
                </div>
                <div>
                    <strong>{asset.symbol}</strong>
                    <p>{asset.name}</p>
                </div>
            </div>
            <div className={classes.amountCell}>
                <p>{asset.amount}</p>
                <p>{asset.valueUsd}</p>
            </div>
            <div className={classes.availableCell}>
                <p>{asset.available}</p>
            </div>
            <div className={classes.actionCell}>
                <div>
                    <button>Convert</button>
                </div>
                <div>
                    <button>Trade</button>
                </div>
            </div>
        </div>
    );
}