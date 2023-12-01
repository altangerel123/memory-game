"use client";

import { useEffect, useState } from "react";
import Card from "./Card";
import styles from "./memory.module.css";

export default function Cards() {
  const [items, setItems] = useState(
    [
      {
        id: 1,
        image: "/img3.jpeg",
      },
      {
        id: 2,
        image: "/img3.jpeg",
      },
      {
        id: 3,
        image: "/img4.jpeg",
      },
      {
        id: 4,
        image: "/img4.jpeg",
      },
      {
        id: 5,
        image: "/img5.jpeg",
      },
      {
        id: 6,
        image: "/img5.jpeg",
      },
    ].sort(() => Math.random() - 0.5)
  );
  const [prev, setPrev] = useState(-1);
  function onClick(id) {
    alert(id);
  }

  const [flipped, setFlipped] = useState([]);

  useEffect(() => {
    if (flipped.length === 2) {
      return;
    }
  }, [flipped]);

  return (
    <div className={styles.cards}>
      {items.map((item) => (
        <Card
          key={item.id}
          setFlipped={setFlipped}
          flipped={flipped}
          image={item.image}
          id={item.id}
        />
      ))}
    </div>
  );
}
