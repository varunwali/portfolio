import styles from "./Education.module.css";
import { LuSchool } from "react-icons/lu";
import { BiSolidBusSchool } from "react-icons/bi";
import { MdSchool } from "react-icons/md";

const Education = () => {
  return (
    <section className={styles.EducationSection} id="education">
      <div className={styles.Educationheading}>
        <h1>Education</h1>
      </div>
      <div className={styles.border}></div>

      <div className={styles.EducationContainer}>
        <div className={styles.Educationcard}>
          <div className={styles.Educationicon}>
            <BiSolidBusSchool />
          </div>
          <div className={styles.Educationinfo}>
            <h3>School</h3>
            <p>KRCES English Medium School Bailhongal</p>
            <a href="" target="_blank"></a>
            <a href="" target="_blank"></a>
          </div>
        </div>
        <div className={styles.Educationcard}>
          <div className={styles.Educationicon}>
            <LuSchool />
          </div>
          <div className={styles.Educationinfo}>
            <h3>PUC</h3>
            <p>Mahesh PU College Dharwad</p>
            <a href="" target="_blank"></a>
            <a href="" target="_blank"></a>
          </div>
        </div>
        <div className={styles.Educationcard}>
          <div className={styles.Educationicon}>
            <MdSchool />
          </div>
          <div className={styles.Educationinfo}>
            <h3>College</h3>
            <p>KLS Gogte Institute of Technology Belgaum</p>
            <a href="" target="_blank"></a>
            <a href="" target="_blank"></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
