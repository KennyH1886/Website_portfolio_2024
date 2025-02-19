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
import profilePic from '../../assets/websitepic.webp';
import CV from '../../assets/RESUME_A.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  // Typing animation state
  const [displayedText, setDisplayedText] = useState('');
  const text = 
    "I have professional experience in Full Stack Development, Data Science, and AI research, committed to delivering innovative solutions.";

  useEffect(() => {
    setDisplayedText(""); // Reset text before animation starts
    let index = 0;

    const typingInterval = setInterval(() => {
      setDisplayedText(text.substring(0, index + 1)); // Ensure correct substring is displayed
      index++;
      if (index === text.length) clearInterval(typingInterval);
    }, 50); // Adjust speed as needed

    return () => clearInterval(typingInterval); // Cleanup function
  }, []); // Ensure effect runs only once

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={profilePic}
          className={styles.hero}
          alt="Profile picture of Kenny Howard"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Kenny
          <br />
          Howard
        </h1>
        <h2>Software Engineer</h2>
        <span>
          <a href="https://x.com/Thatone26823209" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/KennyH1886" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/kenhow1" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn icon" />
          </a>
        </span>
        <p className={styles.description}>{displayedText}</p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
