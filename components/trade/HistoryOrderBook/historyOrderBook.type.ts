export interface HistoryOrderBookRowType {
    price: number,
    amount: number,
    time: string,
    side: 'ask' | 'bid',
}
