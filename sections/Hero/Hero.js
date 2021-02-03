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
      <div>
        <h1>Player FLACKO</h1>
        <p>I make Call of Duty: Warzone content .</p>
        <a
          href="mailto:markusb@nordevo.no"
          target="_blank"
          className={styles.btn}
        >
          Contact
        </a>
      </div>
    </section>
  );
}
