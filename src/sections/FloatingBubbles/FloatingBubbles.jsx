import { useEffect, useState } from "react";
import styles from "./FloatingBubbles.module.css";

const NUM_BUBBLES = 10; // Change this to increase/decrease the number of bubbles

const FloatingBubbles = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    // Generate bubble positions & sizes dynamically
    const generatedBubbles = Array.from({ length: NUM_BUBBLES }, (_, i) => ({
      id: i,
      size: Math.random() * 50 + 20, // Random size between 20px - 70px
      left: Math.random() * 100, // Random horizontal position
      duration: Math.random() * 8 + 5, // Random animation duration (5s - 13s)
    }));
    setBubbles(generatedBubbles);
  }, []);

  return (
    <div className={styles.bubbleContainer}>
      {bubbles.map((bubble) => (
        <span
          key={bubble.id}
          className={styles.bubble}
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            animationDuration: `${bubble.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBubbles;
