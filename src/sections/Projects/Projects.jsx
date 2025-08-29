import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';
import squadlobbyPic from '../../assets/squadlobby_logo.jpg'; // Placeholder image
import dynamicListAI from '../../assets/dynamiclistai.png'; // Placeholder image for Dynamic List AI

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
        
        {/*
        <ProjectCard
          src={squadlobbyPic} 
          link="https://squad-lobby.aiaggies.net/"
          h3="Ai Capital One budget Hackathon application"
          p={
            <>
              An AI application to help manage budgets and track expenses 
              <br />
              interactively with various scenarios from a Hackathon.
            </>
          }
        />
        */}
      
        <ProjectCard
          src={dynamicListAI}
          link="https://ai-dyanmic-list.streamlit.app/"
          h3="Dynamic List AI"
          p={
            <>
              A simple Streamlit app that allows users to create tickets 
              <br />
              with estimated time and descriptions based on AI predictions.
            </>
          }
        />
      </div>

    </section>
  );
}

export default Projects;
