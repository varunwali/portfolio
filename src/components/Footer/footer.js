import styles from "./footer.module.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footericon}>
        <a
          href="https://www.linkedin.com/in/varun-wali-217741222/"
          target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/varunwali" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/varun_wali_36/" target="_blank">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default Footer;
