import styles from "./Stream.module.css";
import Image from "next/image";

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
        <div className={styles.card}>
          <Image
            src="/images/game-setup.jpg"
            alt="Stream setup "
            className={styles.image}
            height={330}
            width={300}
          />
        </div>
        <div className={styles.card}>
          <h4>Twitch Channel</h4>
          <a
            className={styles.postLink}
            aria-label="Twitch"
            href="https://www.twitch.tv/leflacko"
            target="_blank"
          >
            <h5>FLACKO</h5>
          </a>
        </div>
        <div className={styles.card}>
          <Image
            src="/images/character-CoD.jpg"
            alt="Stream setup v2"
            className={styles.image}
            height={330}
            width={300}
          />
        </div>
      </div>
    </section>
  );
}
