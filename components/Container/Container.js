import styles from "./Container.module.css";

export default function Container({ children }) {
  return <div classNme={styles.container}>{children}</div>;
}
