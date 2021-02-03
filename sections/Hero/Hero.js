import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.img}>
        <Image
          src="/images/logo1.png"
          alt="Player logo"
          className={styles.image}
          height={150}
          width={150}
        />
      </div>
      <div className={styles.headerText}>
        <h1>
          <span className={styles.codText}>Call of Duty Player</span>
          <br></br>Flacko
        </h1>
      </div>
    </section>
  );
}
