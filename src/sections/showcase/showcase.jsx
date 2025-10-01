import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react"; // npm i lucide-react
import styles from "./showcase.module.css";

// Images
import Research from "../../assets/reasearch1.jpg";
import chevron1 from "../../assets/chevron_1.jpg";
import d_bank from "../../assets/d_hackathon.jpg";
import documentation from "../../assets/doc1.jpg";
import Shep1 from "../../assets/shep_1.jpg";
import Shep2 from "../../assets/Shep_2.jpg";
import googleTE from "../../assets/g_tech.jpg";
import capital1 from "../../assets/capital_1.jpg";
import sandia from "../../assets/sandia.jpg";
import jpm from "../../assets/jp_m.png";
import jph from "../../assets/jp_h.png";
import hearme from "../../assets/hearme.png";
import bloomberg from "../../assets/bloomberg.png";
import seniorp from "../../assets/sp.png";
import thefirst from "../../assets/the_first.jpg";
import yuan from "../../assets/Xiaohong_Yuan.jpg";
import undergrad_r from "../../assets/undergrad_research.jpg";
import me_ai from "../../assets/me_ai.jpg";
import summit_ai from "../../assets/ai_summit.jpg";

// Animation variants
const fadeInVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

// Showcase items (caption can be string or ReactNode)
const showcaseItems = [
  { img: d_bank, caption: "Placed in Deutsche Bank Hackathon" },
  { img: Research, caption: "AI/ML Research application at NCAT" },
  { img: undergrad_r, caption: "Undergrad Research Symposium 2024" },
  { img: documentation, caption: "Documentation" },
  { img: googleTE, caption: "Google Tech Equity Collective — Houston" },
  { img: Shep1, caption: "Microsoft x SHPE Mentorship Program 2025 (Copilot AI)" },
  { img: Shep2, caption: "SHPE mentorship" },
  { img: bloomberg, caption: "Bloomberg Global Finalist Event" },
  {
    img: jpm,
    caption:
      "JPMorgan 'Data for Good' Hackathon with National Basketball Players Association (NBPA)",
  },
  { img: jph, caption: "JPMorgan Hackathon demo" },
  { img: capital1, caption: "Capital One Hackathon — 1st Place" },
  { img: chevron1, caption: "Multiple 1st places in Hackathons with Chevron" },
  {
    img: sandia,
    caption: (
      <>
        📰 AI/ML Article with Sandia National Labs
        <br />
        Click for more info
      </>
    ),
    link: "https://www.sandia.gov/labnews/2024/12/19/sandia-welcomes-over-50-interns-from-hbcus/",
  },
  { img: hearme, caption: "Sonify Team — HearMe audio application" },
  { img: seniorp, caption: "Sonify Team" },
  {
    img: thefirst,
    caption:
      "Dr. Siobahn Day Grady — first woman to receive a CS PhD at NCAT",
  },
  { img: yuan, caption: "Dr. Xiaohong Yuan — Undergrad Research Professor" },
  { img: me_ai, caption: "The IAIER at NCCU x OpenAI Academy Summit" },
  { img: summit_ai, caption: "AI Summit" },
];

const AUTOPLAY_MS = 4000;

const Showcase = () => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const next = () => setIndex((i) => (i + 1) % showcaseItems.length);
  const prev = () =>
    setIndex((i) => (i === 0 ? showcaseItems.length - 1 : i - 1));

  // Autoplay
  useEffect(() => {
    // clear then set to avoid stacking intervals
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(timerRef.current);
    // re-run when index changes to keep autoplay feeling fresh after manual clicks
  }, [index]);

  // Optional: keyboard support (← →)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const item = showcaseItems[index];
  const altText =
    typeof item.caption === "string" && item.caption
      ? item.caption
      : "Showcase item";

  return (
    <div className={styles.showcaseSection}>
      {/* Title */}
      <h1 className="sectionTitle">Latest Highlights</h1>

      <div className={styles.showcaseWrapper}>
        <div className={styles.showcaseContainer}>
          {/* Arrows */}
          <button
            className={styles.arrowLeft}
            aria-label="Previous"
            onClick={prev}
          >
            <ChevronLeft size={32} />
            {/* If you don't want icons: use &#8592; */}
          </button>

          <button
            className={styles.arrowRight}
            aria-label="Next"
            onClick={next}
          >
            <ChevronRight size={32} />
            {/* Or use &#8594; */}
          </button>

          {/* Slide */}
          <div className={styles.contentWrapper}>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className={styles.slide}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={fadeInVariants}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.imageLink}
                  >
                    <img src={item.img} alt={altText} className={styles.image} />
                  </a>
                ) : (
                  <img src={item.img} alt={altText} className={styles.image} />
                )}

                {/* Caption (supports string or ReactNode) */}
                {item.caption && (
                  <p className={styles.caption}>{item.caption}</p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* (Optional) Dots/Pagination — uncomment if you want jump-to-slide */}
        {/* <div className={styles.dots}>
          {showcaseItems.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === index ? styles.activeDot : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Showcase;
