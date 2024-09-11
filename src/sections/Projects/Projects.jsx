import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import styles from './ProjectsStyles.module.css';
import carrent from '../../assets/carrent.png';
import earphone from '../../assets/earphone.png';
import education from '../../assets/education.png';
import weather from '../../assets/weather.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 1500,
      delay: 200,
      reset: true,
    });

    sr.reveal(`.${styles.sectionTitle}`, { origin: 'top' });
    sr.reveal(`.${styles.projectsContainer}`, { origin: 'bottom', interval: 200 });
  }, []);
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={carrent}
          link="https://github.com/sandwishh/Car_Rental_PHP"
          h3="Car Rental"
          p="Car Rental System"
        />
        <ProjectCard
          src={earphone}
          link="https://github.com/sandwishh/web-3d-front-end-only"
          h3="Ear Phone"
          p="3D Ear Phone Website"
        />
        <ProjectCard
          src={education}
          link="https://github.com/sandwishh/kaoyan"
          h3="kaoyan"
          p="master degree education"
        />
        <ProjectCard
          src={weather}
          link="https://github.com/sandwishh/weather"
          h3="weather"
          p="weather App"
        />
      </div>
    </section>
  );
}

export default Projects;
