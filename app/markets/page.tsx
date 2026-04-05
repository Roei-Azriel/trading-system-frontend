import MarketDetailsSection from "@/components/markets/markeDetailsSection/MarketDetailsSection";
import MarketsHero from "@/components/markets/MarketsHero/MarketsHero";
import MarketsSnapshot from "@/components/markets/MarketsSnapshot/MarketsSnapshot";
import { fetchTicker } from "@/lib/markets/fetchMarketTableAssets";
import classes from "./page.module.css";


export default async function Home() {
  const tickers = ["BTCUSDT","ETHUSDT","USDTUSD"];
  const assetsTable = await fetchTicker(tickers);
  const formattedCount = `${assetsTable.length} tracked assets`;

  return (
    <main className={classes.page}>
      <div className={classes.shell}>
        <section className={classes.hero}>
          <MarketsHero />
          <MarketsSnapshot trackedAssetsCount={formattedCount} />
        </section>
      <MarketDetailsSection assets={assetsTable}/>
      </div>
    </main>
  );
}
