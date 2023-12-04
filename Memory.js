import Cards from "./Cards";
import styles from "./memory.module.css";

export default function Memory() {
  return (
    <>
      <div className={styles.memory}>
        <Cards />
      </div>
    </>
  );
}
