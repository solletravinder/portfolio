// components/Footer.js

import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="social-accounts">
          <ul className="list-inline">
            <li className="list-inline-item">
              <a
                href="https://www.linkedin.com/in/ravinder-sollet-932518113/"
                target="_blank"
                rel="noreferrer"
                className="btn-sm btn-default btn-lg"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://twitter.com/RavinderSollet"
                target="_blank"
                rel="noreferrer"
                className="btn-sm btn-default btn-lg"
              >
                <i className="bi bi-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://github.com/solletravinder"
                target="_blank"
                rel="noreferrer"
                className="btn-sm btn-default btn-lg"
              >
                <i className="bi bi-github"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <p className="top">
            Made with Love | Powered by&nbsp;<a href="#">RADA CORP</a>
          </p>
          <p className="bottom">
            Copyright © <a href="#">RADA CORP</a> 2022
          </p>
        </div>
      </div>
    </footer>
  );
}