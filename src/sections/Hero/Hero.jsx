import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import styles from './HeroStyles.module.css';
import resume1 from '../../assets/resume-Eng.pdf';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import resume from '../../assets/resume.pdf';
import thanat from '../../assets/thanat.png';
import { useTheme } from '../../common/ThemeContext';


function Hero() {
  
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;

  useEffect(() => {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 1500,
      delay: 200,
      reset: true,
    });
    sr.reveal(`.${styles.hero}`, { origin: 'left' });
    sr.reveal(`.${styles.info}`, { origin: 'right' });
  }, []);

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={thanat}
          className={styles.hero}
          alt="Profile picture of THANAT KRITALUKKUL"
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
          THANAT
          <br />
          KRITALUKKUL
          <br />
          庄承福
        </h1>
        <h2>Frontend Developer</h2>
        
        <p className={styles.description}>
        Seeking a Front End Developer internship to enhance my skills in web development, 
        focusing on HTML, CSS, JavaScript, and React.js.
        </p>
        <a href={resume} download>
          <button className="hover">Resume CH</button>
        </a>
        <a href={resume1} download>
          <button className="hover">Resume ENG</button>
        </a>
      </div>
    </section>
    
  );
}

  // ScrollReveal().reveal('.hero', { delay :500 });

export default Hero;
