"use client";

import { useEffect, useState } from "react";
import Card from "./Card";
import styles from "./memory.module.css";
import { defaultConfig } from "next/dist/server/config-shared";

export default function Cards() {
  const [items, setItems] = useState(
    [
      {
        id: 1,
        text: "A",
      },
      {
        id: 2,
        text: "A",
      },
      {
        id: 3,
        text: "B",
      },
      {
        id: 4,
        text: "B",
      },
      {
        id: 5,
        text: "C",
      },
      {
        id: 6,
        text: "C",
      },
      {
        id: 7,
        text: "D",
      },
      {
        id: 8,
        text: "D",
      },
    ].sort(() => Math.random() - 0.5)
  );

  const [flipped, setFlipped] = useState([]);

  useEffect(() => {
    if (flipped.length === 2) {
    }
  }, [flipped]);

  return (
    <div className={styles.memo}>
      Memory-Game
      <div className={styles.cards}>
        {items.map((item) => (
          <Card
            key={item.id}
            setFlipped={setFlipped}
            flipped={flipped}
            text={item.text}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}
