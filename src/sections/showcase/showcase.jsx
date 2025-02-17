import React, { useState, useEffect } from "react";
import styles from "./Showcase.module.css"; // CSS Module for animations

const showcaseItems = [
  { img: '../../assets/goku_test_gif.gif', caption: "Award for Best Developer" },
  { img: '../../assets/squadlobby_logo.jpg', caption: "Published in Tech Magazine" },
  { img: '../../assets/twitter-dark.svg', caption: "AI Budget Tracker App" },
];

const Showcase = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % showcaseItems.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.showcaseContainer}>
      {showcaseItems.map((item, i) => (
        <div
          key={i}
          className={`${styles.slide} ${i === index ? styles.active : ""}`}
        >
          <img src={item.img} alt={item.caption} className={styles.image} />
          <p className={styles.caption}>{item.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default Showcase;
