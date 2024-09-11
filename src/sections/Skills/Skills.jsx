import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  useEffect(() => {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 1500,
      delay: 200,
      reset: true,
    });

    sr.reveal(`.${styles.sectionTitle}`, { origin: 'top' });
    sr.reveal(`.${styles.skillList}`, { origin: 'left', interval: 200 });
  }, []);

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="Node" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Spline" />
        <SkillList src={checkMarkIcon} skill="Angular" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="SQL" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
      </div>
    </section>
  );
}

export default Skills;
