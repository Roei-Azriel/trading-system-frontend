import classes from "./MarketsSnapshot.module.css";

type MarketsSnapshotProps = {
  trackedAssetsCount: string;
};

export default function MarketsSnapshot({ trackedAssetsCount }: MarketsSnapshotProps) {
  return (
    <aside className={classes.statsCard}>
      <p className={classes.statsTitle}>Snapshot</p>
      <div className={classes.statRow}>
        <span className={classes.statLabel}>Coverage</span>
        <span className={classes.statValue}>{trackedAssetsCount}</span>
      </div>
      <div className={classes.statRow}>
        <span className={classes.statLabel}>Source</span>
        <span className={classes.statValue}>Binance 24h</span>
      </div>
      <div className={classes.statRow}>
        <span className={classes.statLabel}>Next step</span>
        <span className={classes.statValue}>WebSocket feed</span>
      </div>
    </aside>
  );
}
