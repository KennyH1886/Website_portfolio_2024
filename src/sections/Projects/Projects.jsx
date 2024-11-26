import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';
import squadlobbyPic from '../../assets/squadlobby_logo.jpg'; // Placeholder image

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">New Projects</h1>

      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://master--weatherappkh.netlify.app/"
          h3="WeatherAppkh"
          p="Weather app using Api"
        />
        
        
        <ProjectCard
          src={squadlobbyPic} 
          link="https://squad-lobby.aiaggies.net/"
          h3="Ai Capital One budget Hackathon application"
          p={    <>
            An AI application to help manage budgets and track expenses 
            <br />
            interactively with various scenarios from a Hackathon.
          </>}
        />
      </div>
    </section>
  );
}

export default Projects;