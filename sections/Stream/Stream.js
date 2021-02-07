import styles from "./Stream.module.css";

export default function Stream() {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h3>Stream</h3>
        <p>
          I will be on Twitch every week, let me know if you want to join in on
          a Stream. Always fun talking with new people.
        </p>
      </div>
      <div className={styles.grid}>
        <div className={styles.card}>
          <img src="/images/game-setup.jpg" alt="picture of game setup" />
        </div>
        <div className={styles.card}>
          <h4>Twitch Channel</h4>
          <div className={styles.postLink}>
            <a
              aria-label="Twitch"
              href="https://www.twitch.tv/leflacko"
              target="_blank"
            >
              <h5>FLACKO</h5>
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="/images/character-CoD.jpg"
            alt="picture of call of duty character"
          />
        </div>
      </div>
    </section>
  );
}
