import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.img}>
        <img src="/images/logo1.png" alt="Player logo" />
      </div>
      <div className={styles.headerText}>
        <h1>
          <span className={styles.codText}>
            Call of Duty Player From Norway
          </span>
          <br></br>Flacko
        </h1>
      </div>
    </section>
  );
}
