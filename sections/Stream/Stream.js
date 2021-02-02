import styles from "./Stream.module.css";

export default function Stream() {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h3>Stream</h3>
        <p>
          I stream on Twitch every week, let me know if you want to join in on
          the Stream. Always fun talking with new people.
        </p>
      </div>
      <div className={styles.grid}>
        <div className={styles.card}>Card</div>
        <div className={styles.card}>Card</div>
        <div className={styles.card}>Card</div>
      </div>
    </section>
  );
}
