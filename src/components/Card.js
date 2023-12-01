import styles from "./memory.module.css";

export default function Card(props) {
  return (
    <div
      className={styles.card}
      onClick={() => {
        if (props.flipped.length < 2) {
          props.setFlipped((prev) => [...prev, props.id]);
        }
      }}
    >
      {props.flipped.includes(props.id) ? (
        <img className={styles.image} src={props.image}></img>
      ) : (
        ""
      )}
    </div>
  );
}
