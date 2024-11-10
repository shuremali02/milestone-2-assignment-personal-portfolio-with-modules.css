"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import styles from "../css.modules/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.topSection}>
          <div>
            <div>
              <p className="hidden md:block">
                Interested in connecting? Send me a message at: {" "}
                <button className={styles.emailButtonLarge}>
                  📧 shuremsyed41@gmail.com
                </button>
              </p>
              <button className={`md:hidden ${styles.emailButtonSmall}`}>
                Shuremsyed41@gmail.com
              </button>
            </div>
          </div>
        </div>

        <div className={styles.navLinks}>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/portfolio" className={styles.navLink}>Project</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </div>

        <div className={styles.profileImage}>
          <Image
            src="/dp.jpg"
            alt="Footer Image"
            width={80}
            height={80}
            className={styles.image}
          />
        </div>

        <div className={styles.socialLinks}>
          <Link href="//linkedin.com/in/syed-shurem-ali-5a55852a0" aria-label="LinkedIn" className={styles.socialLink}>
            <FaLinkedin />
          </Link>
          <Link href="https://github.com/shuremali02" aria-label="GitHub" className={styles.socialLink}>
            <FaGithub />
          </Link>
          <Link href="https://www.facebook.com/syed.shuremali?mibextid=ZbWKwL" aria-label="Facebook" className={styles.socialLink}>
            <FaFacebook />
          </Link>
          <Link href="//linkedin.com/in/syed-shurem-ali-5a55852a0" aria-label="Instagram" className={styles.socialLink}>
            <FaInstagram />
          </Link>
        </div>

        <div className={styles.copyright}>
          All rights reserved. &copy; Copyright{" "}
          <Link href="/">Syed Shurem Ali</Link> 2024
        </div>
      </div>
    </footer>
  );
}
