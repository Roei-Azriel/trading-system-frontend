import classes from "./MarketsHero.module.css";

export default function MarketsHero() {
  return (
    <div className={classes.heroCard}>
      <span className={classes.eyebrow}>Live Overview</span>
      <h1 className={classes.title}>Markets at a glance</h1>
      <p className={classes.description}>
        Track the core pairs we support, scan their latest price action, and get the table
        ready for the live feed that will stream in next.
      </p>
    </div>
  );
}
