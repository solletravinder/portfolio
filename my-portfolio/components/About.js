// components/About.js
import Image from 'next/image';
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h2>About</h2>
      <Image src="/assets/svg/line.svg" width='100' height='100' className="line" alt="line" />
      <p>
        Hello! I&apos;m Ravinder Sollet, a Software Engineer.{" "}
        <a href="https://financepeer.com" target="_blank" rel="noreferrer">
          Financepeer - a Fintech company
        </a>
        .
      </p>
      <p>
        As a full-stack developer I can work with Next.js, VanillaJS, React.js, DJango Framework(Python language), webpack for building & minification(uglification)
      </p>
      <p>
        I am currently on the path to create testable fullstack app.
      </p>
    </div>
  );
}