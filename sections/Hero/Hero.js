import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.container}>
      <h1>Player FLACKO</h1>
      <p>I make Call of Duty Warzone content .</p>
      <button className={styles.buttonSecondary} type="button">
        Contact me
      </button>
    </div>
  );
}
