import React from "react";
import styles from "../styles/hero.module.css";

interface HeroProps {
  title: string;
  subtitle: string;
  imageOn?: boolean;
}

export default function Hero({ title, subtitle, imageOn }: HeroProps) {
  return (
    <>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        {imageOn && <figure>[画像]</figure>}
      </div>
    </>
  );
}
