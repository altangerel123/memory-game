import styles from "./memory.module.css";

export default function Card(props) {
  return (
    <div
      className={styles.card}
      onClick={() => {
        if (props.flipped.length < 8) {
          props.setFlipped((prev) => [...prev, props.id]);
        }
      }}
    >
      {props.flipped.includes(props.id) ? (
        <p className={styles.text}>{props.text}</p>
      ) : (
        ""
      )}
    </div>
  );
}
