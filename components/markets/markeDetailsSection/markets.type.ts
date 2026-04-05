export interface MarketTableRow {
  asset: string;
  price: number;
  changePercent: number;
  volume24h: number;
}


export interface BinanceTicker24hrResponse {
  symbol: string;
  lastPrice: string;
  priceChangePercent: string;
  quoteVolume: string;
}