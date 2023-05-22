import styles from "../styles/container.module.css";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  large?: boolean;
}

export default function Container({ children }: LayoutProps , large =false) {
  return (
    <div className={large ? styles.large : styles.default}>{children}</div>
  );
}
