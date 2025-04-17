import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterIcon from "../../assets/twitter-light.svg";
import githubIcon from "../../assets/github-light.svg";
import linkedinIcon from "../../assets/linkedin-light.svg";
import CV from "../../assets/Murali-Krishna-2.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "Light" ? sun : moon;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile Picture" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div>
        <h1>
          <span className={styles.highlight}>Murali</span> Krishna
        </h1>
        <h2 className={styles.floating}>Software Engineer</h2>

        <div className={styles.contact}>
          <p>📞 <a href="tel:+91 7075027502">+91 7075027502</a></p>
          <p>📧 <a href="mk5612330@gmail.com">mk5612330@gmail.com</a></p>
        </div>

        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="GitHub Icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="LinkedIn Icon" />
          </a>
        </span>

        <p className={styles.description}>
          With a passion for developing modern React web apps for commercial businesses.
        </p>

        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
