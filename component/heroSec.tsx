import React from 'react';
import { GoDotFill } from "react-icons/go";
import Image from "next/image";

import styles from "../css.modules/heroSec.module.css";

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.centeredButtonContainer}>
        <button className={styles.centeredButton}>
          <p className={styles.iconText}>
            <GoDotFill />
          </p>
          <p className={`${styles.typewriter}`}>It&#39;s me <b>Syed Shurem Ali🙎🏻‍♂️</b></p>
        </button>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src={"/dp.jpg"}
          width={70}
          height={70}
          alt="Profile"
          className={styles.roundedImage}
        />
      </div>

      <div className={styles.mainText}>
        <p>
          Websites Designing
          <br />
          that drive Conversions
        </p>
      </div>

      <div className={styles.subtitleText}>
        <p>
          <b>AIM</b> to Design and develop visually stunning
          <br />
          and technically proficient websites for
          <br />
          clients worldwide.
        </p>
      </div>

      <div className={styles.emailButton}>
        <button className={styles.emailButton}>
          📧 Shuremsyed41@gmail.com
        </button>
      </div>
    </div>
  );
}
