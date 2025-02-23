import { useEffect, useState } from 'react';
import styles from './HeroStyles.module.css';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import linktreeDark from '../../assets/linktree_dark.png'; // Linktree Icon (Dark Mode)
import profilePic from '../../assets/websitepic.webp';
import CV from '../../assets/Resume_2025.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const linktreeIcon = linktreeDark; // Add a light version if needed

  // Typing animation state
  const [displayedText, setDisplayedText] = useState('');
  const text = 
    "I have professional experience in Full Stack Development, Data Science, and AI research, committed to delivering innovative solutions.";

  useEffect(() => {
    setDisplayedText(""); 
    let index = 0;

    const typingInterval = setInterval(() => {
      setDisplayedText(text.substring(0, index + 1));
      index++;
      if (index === text.length) clearInterval(typingInterval);
    }, 50); 

    return () => clearInterval(typingInterval);
  }, []); 

  return (
    <section id="hero" className={styles.container}>
      {/* Flexbox Wrapper for Centering */}
      <div className={styles.colorModeContainer}>
        <img
          src={profilePic}
          className={styles.hero}
          alt="Profile picture of Kenny Howard"
        />
      </div>

      {/* Text Content */}
      <div className={styles.info}>
        <h1>Kenny<br />Howard</h1>
        <h2>Software Engineer</h2>
        
        {/* Social Links */}
        <span className={styles.socialLinks}>
          <a href="https://x.com/Thatone26823209" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/KennyH1886" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub icon" />
          </a>
          <a href="https://www.linkedin.com/in/kenhow1" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn icon" />
          </a>
          <a href="https://linktr.ee/kenhow1" target="_blank" rel="noopener noreferrer">
            <img src={linktreeIcon} alt="Linktree icon" className={styles.linktreeIcon} />
          </a>
        </span>

        {/* Typing Animation */}
        <p className={styles.description}>{displayedText}</p>

        {/* Resume Button */}
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>

        {/* Resume PDF Preview */}
        <div className={styles.resumePreview}>
          <iframe
            src={`${CV}#zoom=65`}  
            width="100%"
            height="500px"
            title="Resume Preview"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Hero;
