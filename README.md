# TradeForge Frontend

TradeForge is the client application for a crypto trading platform inspired by modern exchange interfaces. The current frontend focuses on building a clear trading experience with dedicated flows for markets, wallet balances, and a live-style trade screen.

This project is being built incrementally: some screens already consume external market data, while others still use mock data until the backend trading flow and real-time streams are connected.

## Current Status

- `Markets` page is connected to Binance 24h ticker data.
- `Trade` page layout is built and visually structured into exchange-style panels.
- `Wallet` page is implemented with mock portfolio data and action modals.
- Global shell, branding, and dark theme are in place.
- Real-time order book, trade history, and pair selection are not wired to backend services yet.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- CSS Modules
- TradingView embedded chart widget
- Binance REST API for market snapshot data

## Product Areas

### Markets

The `markets` view fetches live 24h ticker data from Binance and maps it into the app's table format. It currently presents:

- hero section
- market snapshot summary
- asset details table

This page is the most connected screen in the frontend right now because it already consumes external data.

### Trade

The `trade` screen is designed as a three-column exchange layout:

- left panel: order book
- center panel: TradingView chart
- right panel: market trades and future pair selector area

Current trade-side UI includes:

- mock asks and bids
- depth bar with percentage split between buyers and sellers
- market trades list with mocked executions
- placeholder panel reserved for market pair selection

The goal of this screen is to finish the user interface first, then replace mocks with backend-driven and websocket-driven data.

### Wallet

The wallet view is already structured as a usable portfolio screen with:

- estimated balance summary
- deposit modal
- withdraw modal
- asset table

The current implementation uses mock balances while the backend wallet service is being prepared for full frontend integration.

## Project Structure

```text
app/
  layout.tsx
  page.tsx
  markets/
  trade/
  wallet/

components/
  layout/
  markets/
  trade/
  wallet/

lib/
  markets/

assets/
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Design Direction

The interface intentionally follows the mental model of professional exchange platforms:

- dense but readable information layout
- strong visual separation between trading panels
- red/green market color language
- responsive modular components that can later be connected to live infrastructure

The goal is not to copy an exchange pixel-for-pixel, but to learn from proven trading UX patterns and implement them cleanly in our own codebase.

## Known Gaps

- home page is still a placeholder
- account area is not implemented yet
- trade screen still relies on mock order book and trade history data
- wallet page is not connected to the backend wallet service yet
- pair selector panel is still a placeholder

## Next Steps

- connect the wallet screen to the wallet-service
- connect the trade page to real order and balance APIs
- add websocket streaming for order book updates and market trades
- build the market pair selector panel
- replace mocked trade data with backend-driven data
- integrate Redis for fast pub/sub and real-time market distribution
- support authenticated user flows and protected account actions

## Why This Project

TradeForge is being built as a practical full-stack trading system project. The frontend is meant to demonstrate:

- product thinking around exchange UX
- modular React component design
- clean separation between static UI, fetched data, and future real-time streams
- readiness for a backend-driven trading architecture
