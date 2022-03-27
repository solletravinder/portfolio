// components/Contact.js

import Image from 'next/image';

import { Row, Col } from "react-bootstrap";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h2>Contact</h2>
      <Image src="/assets/svg/line.svg" width='100' height='100' className="line" alt="line" />
      <Row className={styles.boxes}>
        <Col lg={4} md={6} sm={12}>
          <a
            href="mailto:solletravinder@gmail.com"
            target="_blank"
            rel="noreferrer"
            className={styles.box}
          >
            <i className="bi bi-envelope"></i>
            Mail
          </a>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <a
            href="https://api.whatsapp.com/send/?phone=918919480241&text=Hi"
            target="_blank"
            rel="noreferrer"
            className={styles.box}
          >
            <i className="bi bi-whatsapp"></i>
            Message
          </a>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <a
            href="tel:+918919480241"
            target="_blank"
            rel="noreferrer"
            className={styles.box}
          >
            <i className="bi bi-telephone"></i>
            Call
          </a>
        </Col>
      </Row>
    </div>
  );
}