import { useEffect, useState } from 'react';
import styles from './EducationStyles.module.css';
import squadlobbyPic from '../../assets/ncat_logo.jpg';
import dellCertIcon from '../../assets/dell_ai.png'; // Dell AI Certification icon
import ftccIcon from '../../assets/ftcc.png'; // FTCC logo

function Education() {
  const [theme, setTheme] = useState('dark-mode');

  useEffect(() => {
    // Detect current theme (assumes your app manages light/dark mode globally)
    const currentTheme = localStorage.getItem('theme') || 'dark-mode';
    setTheme(currentTheme);
  }, []);

  return (
    <section id="education" className={`${styles.container} ${theme}`}>
      <h1 className="sectionTitle">Education</h1>

      {/* FLEXBOX WRAPPER for horizontal alignment */}
      <div className={styles.educationWrapper}>

        {/* 🎓 North Carolina A&T State University - B.S. */}
        <div className={styles.educationCard}>
          <img src={squadlobbyPic} alt="Graduation Cap" className={styles.icon} />
          <div className={styles.details}>
            <h3>North Carolina A&T State University</h3>
            <p><strong>Bachelor of Science in Computer Science</strong></p>
            <p>2025</p>
            <p>Member of ACM | SHPE | NSBE | AI undergrad Researcher | Scholarship Recipient</p>
          </div>
        </div>

        {/* 🎓 North Carolina A&T State University - M.S. */}
        <div className={styles.educationCard}>
          <img src={squadlobbyPic} alt="Graduate Degree" className={styles.icon} />
          <div className={styles.details}>
            <h3>North Carolina A&T State University</h3>
            <p><strong>Master of Science in Computer Science (AI & Data Science Focus)</strong></p>
            <p>Expected Graduation: December 2026</p>
            <p>Member of ACM | SHPE | NSBE | AI Graduate Researcher | Fellowship Recipient</p>
          </div>
        </div>

        {/* 🎖️ Dell Generative AI Certification - Now Clickable */}
        <div className={styles.educationCard}>
          <a 
            href="https://www.credly.com/badges/930608f4-3181-4740-91bd-fa1084868158/twitter" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.certLink}
          >
            <img src={dellCertIcon} alt="Dell AI Certification" className={styles.icon} />
          </a>
          <div className={styles.details}>
            <h3>
              <a 
                href="https://www.credly.com/badges/930608f4-3181-4740-91bd-fa1084868158/twitter" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.certLink}
              >
                Dell Generative AI Certification
              </a>
            </h3>
            <p><strong>Issued by Dell Technologies</strong></p>
            <p> Focused on foundational & advanced AI applications, ethical considerations, and deployment strategies.</p>
          </div>
        </div>

        {/* 🏫 Fayetteville Technical Community College (FTCC) */}
        <div className={styles.educationCard}>
          <img src={ftccIcon} alt="FTCC Logo" className={styles.icon} />
          <div className={styles.details}>
            <h3>Fayetteville Technical Community College (FTCC)</h3>
            <p><strong>Associates of Science</strong></p>
          </div>
        </div>

      </div> {/* End of Flex Wrapper */}
    </section>
  );
}

export default Education;