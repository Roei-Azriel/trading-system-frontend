import WalletHeader from "@/components/wallet/WalletHeader/WalletHeader";
import WalletAssetsSection from "@/components/wallet/WalletAssetsSection/WalletAssetsSection";
import type {WalletAsset} from  "@/components/wallet/WalletAssetsSection/Wallet.type";

export default function Home(){

    const mockAssets: WalletAsset[] = [
  {
    id: "1",
    symbol: "BTC",
    name: "Bitcoin",
    amount: 0.00192516,
    valueUsd: 128.44,
    available: 0.00192516,
  },
  {
    id: "2",
    symbol: "ETH",
    name: "Ethereum",
    amount: 0.0874,
    valueUsd: 245.12,
    available: 0.0874,
  },
  {
    id: "3",
    symbol: "USDT",
    name: "TetherUS",
    amount: 127.82514353,
    valueUsd: 127.83,
    available: 127.82514353,
  },
];

    return(
        <>
            <WalletHeader  estimatedBalanceInBTC = {128} estimatedBalanceInUSDT = {50}/>
            <WalletAssetsSection assets={mockAssets}/>
        </>
    )
}