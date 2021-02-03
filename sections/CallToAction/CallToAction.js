import styles from "./CallToAction.module.css";

export default function CallToAction() {
  return (
    <div className={styles.container}>
      <h4>Call of Duty stats</h4>
      <a
        href="https://cod.tracker.gg/warzone/profile/atvi/LeFlacko%232336882/overview"
        target="_blank"
        className={styles.btn}
      >
        Click here
      </a>
    </div>
  );
}
