import Image from 'next/image';

import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <main className={styles.header}>
      <Image src="/assets/images/profile.jpg" className={styles.dp} width='100' height='100' alt="profile" />

      <h1 className={styles.name}>Ravinder Sollet</h1>

      <p className={styles.about}>
        Software Engineer,
        <br />
        Lead Full Stack Developer at{" "}
        <a href="https://financepeer.com" target="_blank" rel="noreferrer">
          Financepeer
        </a>
      </p>
    </main>
  );
}