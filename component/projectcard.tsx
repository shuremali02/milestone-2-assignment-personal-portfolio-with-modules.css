"use client"
import React, { useEffect } from 'react';
import Image from "next/image";
import 'aos/dist/aos.css';
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import AOS from 'aos';
import styles from '../css.modules/projectcard.module.css';

interface Props {
  title: string;
  description: string;
  img: string;
  route: string;
}

export default function Card(prop:Props) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className={`${styles.cardContainer} ${styles.smHeight} ${styles.mdHeight} ${styles.lgHeight}`}
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1500"
    >
      {/* Decorative Dots */}
      <div className={styles.dotsContainer}>
        <p className={styles.dotEmerald}><GoDotFill /></p>
        <p className={styles.dotBg}><GoDotFill /></p>
      </div>

      {/* Project Image */}
      <Image
        src={prop.img}
        alt={prop.title}
        height={0}
        width={1440}
        className={styles.projectImage}
      />

      {/* Project Details and Link */}
      <Link href={prop.route} className={styles.linkWrapper}>
        <div className={styles.detailsContainer}>
          <div className="space-y-2">
            <h1 className={styles.projectTitle}>{prop.title}</h1>

            {/* Responsive Description */}
            <p className={`${styles.projectDescription} ${styles.smFont} ${styles.lgFont}`}>
              {prop.description}
            </p>
          </div>

          {/* Arrow Icon with Hover Effect */}
          <div className={styles.arrowIconContainer}>
            <MdArrowOutward className={styles.arrowIcon} />
          </div>
        </div>
      </Link>
    </div>
  );
}
