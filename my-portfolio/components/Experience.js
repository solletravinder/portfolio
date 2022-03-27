// components/Experience.js

import Image from 'next/image';
import styles from "../styles/Experience.module.css";

export default function Experience() {
  return (
    <div className={styles.experience}>
      <h2>Experience</h2>
      <Image src="/assets/svg/line.svg" width='100' height='100' className="line" alt="line" />
      <div className={styles.lineContainer}>
        <div className={styles.line}>
          <i className="bi bi-briefcase"></i>
          <div>
            <div className={styles.college}>
              <a href="https://www.codezen.in/" target="_blank" rel="noreferrer">
                Codezen Tech Solutions LLP
              </a>
            </div>
            <div className={styles.branch}>
              Full Stack Developer (July 2017 - July 2019)
            </div>
          </div>
        </div>
      </div>
      <div className={styles.lineContainer}>
        <div className={styles.line}>
          <i className="bi bi-briefcase"></i>
          <div>
            <div className={styles.college}>
              <a href="https://www.codezen.in/" target="_blank" rel="noreferrer">
                Financepeer
              </a>
            </div>
            <div className={styles.branch}>
              Full Stack Developer (July 2019 - Present)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}