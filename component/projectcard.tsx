"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import "aos/dist/aos.css";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import AOS from "aos";
import styles from "../css.modules/projectcard.module.css";

interface Props {
  title: string;
  description: string;
  img: string;
  route: string;
}

export default function Card({ title, description, img, route }: Props) {
  useEffect(() => {
    AOS.init();
    
    // Cleanup function to avoid memory leaks
    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <div
      className={styles.cardContainer}
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
        src={img}
        alt={title}
        height={0}
        width={1440}
        className={styles.projectImage}
        priority // Optional: ensures that images load quickly
      />

      {/* Project Details and Link */}
      <Link href={route} passHref>
        <div className={styles.detailsContainer}>
          <div className="space-y-2">
            <h1 className={styles.projectTitle}>{title}</h1>

            {/* Responsive Description */}
            <p className={styles.projectDescription}>{description}</p>
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
