import React from 'react';
import Link from 'next/link';
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contactSection}>
      <div>
        <h1 className={styles.title}>Contact Me</h1>
        <br />

        <div className={styles.container}>
          <div
            className={styles.contactBox}
            data-aos="flip-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
          >
            <div className={styles.buttonContainer}>
              <Link href="mailto:shuremsyed41@gmail.com">
                <button className={styles.button}>
                  <p>Get in Touch</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
