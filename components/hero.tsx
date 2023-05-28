import React from "react";
import styles from "../styles/hero.module.css";
import Image from "next/image";
import eyecatch from "../images/main-kukku.jpg";

interface HeroProps {
  title: string;
  subtitle: string;
  imageOn?: boolean;
}

export default function Hero({ title, subtitle, imageOn }: HeroProps) {
  return (
    <>
      <div className={styles.flexContainer}>
        <div className={styles.text}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        {imageOn && (
          <figure className={styles.image}>
            <Image
              src={eyecatch}
              alt=""
              layout="responsive"
              sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw"
              priority
              placeholder="blur"
            />
          </figure>
        )}
      </div>
    </>
  );
}
