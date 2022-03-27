import Image from 'next/image';
import styles from "../styles/Education.module.css";

export default function Education() {
  return (
    <div className={styles.education}>
        <h2>Education</h2>
        <Image src="/assets/svg/line.svg" width='100' height='100' className="line" alt="line" />
        <div className={styles.lineContainer}>
            <div className={styles.line}>
                <i className="bi bi-mortarboard"></i>
                <div>
                    <div className={styles.college}>
                        <a href="https://www.bvb.edu/" target="_blank" rel="noreferrer">
                        B. V. Bhoomaraddi College of Engineering & Technology, Vidyanagar, Hubli 580 031. Karnataka - India
                        </a>
                    </div>
                    <div className={styles.branch}>
                        Bachelor in Engineering(BE), Electrical & Electronics Engineering
                        (June 2012- May 2016)
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
