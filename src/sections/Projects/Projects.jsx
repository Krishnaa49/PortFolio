import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import ProjectCard from "../../common/ProjectCard";
import FitLift from "../../assets/fitlift.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={viberr} link="ad" name="Viberr"/>
        <ProjectCard src={freshBurger} link="ad" name="Video Playing"/>
        <ProjectCard src={FitLift} link="ad" name="Weight Lift"/>
      </div>
    </section>
  );
}

export default Projects;


