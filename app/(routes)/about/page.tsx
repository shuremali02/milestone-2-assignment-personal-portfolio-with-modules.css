"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import styles from "./about.module.css";

export default function About() {
  // Initialize AOS animations when the component mounts
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.aboutContainer}>
      <div>
        <h1 className={styles.title}>About Me</h1>
      </div>
      <div className={styles.flexContainer}>
        <div
          className={styles.profileImageContainer}
          data-aos="flip-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
        >
          <Image
            src={"/dp.jpg"}
            alt="Profile Picture"
            width={150}
            height={150}
            className={styles.profileImage}
          />
        </div>
        <div
          className={styles.descriptionContainer}
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
        >
          <p className={styles.introText}>
            I am Syed Shurem Ali.
            <br />
            <br />
          </p>
          <p className={styles.mainText}>
            I&#39;m a front-end developer with a passion for creating intuitive
            and user-friendly web interfaces. Over the past 2.5 years, I&#39;ve
            been dedicated to mastering front-end technologies through various
            hands-on projects. I also have a foundational understanding of
            WordPress, having completed a DIT course in the field.
          </p>
        </div>
      </div>
    </div>
  );
}
