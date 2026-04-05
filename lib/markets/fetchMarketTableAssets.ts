import { MarketTableRow , BinanceTicker24hrResponse} from "@/components/markets/markeDetailsSection/markets.type";


export async function fetchTicker(tickers : string[]): Promise<MarketTableRow[]> {

    try{
        const symbols = encodeURIComponent(JSON.stringify(tickers));
        const url = `https://api.binance.com/api/v3/ticker/24hr?symbols=${symbols}`;
        const res = await fetch(url);
        if(!res.ok){
            throw new Error(`HTTP error: ${res.status}`);
        }
        const data:BinanceTicker24hrResponse[] = await res.json();
        if (!Array.isArray(data)) {
            throw new Error("Invalid response format");
        }
        const marketTableCoins = data.map((ticker) => mapBinanceTicker(ticker));
        
        return marketTableCoins;

    }catch (err) {
        console.error("fetchTicker failed:", err);
        return [];
  }
}


function mapBinanceTicker(data : BinanceTicker24hrResponse) : MarketTableRow{
    return{
        asset:data.symbol.replace("USDT",""),
        price:Number(data.lastPrice) || 0,
        changePercent:Number(data.priceChangePercent) || 0,
        volume24h:Number(data.quoteVolume) || 0,
    }
}