import styles from "./hero.module.css";
import profileSvg from "../images/profile.svg";

const hero = () => {
  return (
    <section id="about">
      <div className={styles.Container}>
        <div className={styles.textContainer}>
          <h1>Hi, I'm Varun</h1>
          <p>A passionate Full Stack Software Developer 🚀</p>
        </div>
        <div className={styles.ImageContainer}>
          <img src={profileSvg} alt="profile"></img>
        </div>
      </div>
    </section>
  );
};

export default hero;
