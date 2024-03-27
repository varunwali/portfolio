import styles from "./project.module.css";
import { FaFileAlt } from "react-icons/fa";
import { FaBuildingNgo } from "react-icons/fa6";
import { FaLaptop } from "react-icons/fa6";
const Project = () => {
  return (
    <section className={styles.ProjectSection} id="project">
      <div className={styles.Projectheading}>
        <h1>Projects</h1>
      </div>
      <div className={styles.border}></div>

      <div className={styles.ProjectContainer}>
        <div className={styles.Projectcard}>
          <div className={styles.Projecticon}>
            <FaFileAlt />
          </div>
          <div className={styles.Projectinfo}>
            <h3>Resume Bulider</h3>
            <p>
              It is application used to build resume for students and developers
            </p>
            <a href="" target="_blank"></a>
            <a href="" target="_blank"></a>
          </div>
        </div>
        <div className={styles.Projectcard}>
          <div className={styles.Projecticon}>
            <FaLaptop />
          </div>
          <div className={styles.Projectinfo}>
            <h3>Job Portal</h3>
            <p>It is application used by jobseekers to find jobs and apply</p>
            <a href="" target="_blank"></a>
            <a href="" target="_blank"></a>
          </div>
        </div>
        <div className={styles.Projectcard}>
          <div className={styles.Projecticon}>
            <FaBuildingNgo />
          </div>
          <div className={styles.Projectinfo}>
            <h3>Ngo website</h3>
            <p>
              It is website made for ngo to promote their cause and services
            </p>
            <a href="" target="_blank"></a>
            <a href="" target="_blank"></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
