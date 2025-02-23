import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./showcase.module.css";

// ✅ Import images correctly
import Research from "../../assets/reasearch1.jpg";
import chevron1 from "../../assets/chevron_1.jpg";
import d_bank from "../../assets/d_hackathon.jpg"; 
import documentation from "../../assets/doc1.jpg"; 
import Shep1 from "../../assets/shep_1.jpg"; 
import Shep2 from "../../assets/Shep_2.jpg"; 
import googleTE from "../../assets/g_tech.jpg"; 
import capital1 from "../../assets/capital_1.jpg";  
import sandia from "../../assets/sandia.jpg";

// ✅ Animation variants
const fadeInVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

// ✅ Showcase items with imported images & links
const showcaseItems = [
  { 
    img: d_bank, 
    caption: "Placed in Deutsche Bank Hackathon"
  },
  { 
    img: Research, 
    caption: "AI/ML Reaserch application NCAT"
  },
  { 
    img: documentation, 
    caption: "Documentation"
  },
  { 
    img: googleTE, 
    caption: "Google Tech Equity Collective Houston"
  },
  { 
    img: Shep1, 
    caption: "Microsoft x SHEPE Mentorship Program 2025 with copilot AI"
  },
  { 
    img: Shep2, 
  },
  { 
    img: capital1, 
    caption: "Capital One Hackathon 1st Place"
  },
  { 
    img: chevron1, 
    caption: "Multiple first places in Hackathons with Chevron"
  },
  { 
    img: sandia, 
    caption:   <>
    📰 AI/ML Article with Sandia National Labs
    <br />
    Click for more info
  </>,
    link: "https://www.sandia.gov/labnews/2024/12/19/sandia-welcomes-over-50-interns-from-hbcus/" 
  },
];

const Showcase = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % showcaseItems.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.showcaseSection}>
      {/* ✅ Section Title (Centered) */}
      <h1 className="sectionTitle">Latest Highlights</h1> 

      {/* ✅ Wrapper to Ensure Everything is Centered */}
      <div className={styles.showcaseWrapper}>
        <div className={styles.showcaseContainer}>
          <div className={styles.contentWrapper}>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className={styles.slide}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={fadeInVariants}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {/* ✅ Make the article image clickable */}
                {showcaseItems[index].link ? (
                  <a 
                    href={showcaseItems[index].link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.imageLink}
                  >
                    <img
                      src={showcaseItems[index].img}
                      alt={showcaseItems[index].caption}
                      className={styles.image}
                    />
                  </a>
                ) : (
                  <img
                    src={showcaseItems[index].img}
                    alt={showcaseItems[index].caption}
                    className={styles.image}
                  />
                )}
                <p className={styles.caption}>{showcaseItems[index].caption}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
