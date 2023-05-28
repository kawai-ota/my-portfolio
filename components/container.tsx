import styles from "../styles/container.module.css";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  large?: boolean;
}

export default function Container({ children, large = false }: LayoutProps) {
  return (
    <div className={large ? styles.large : styles.default}>{children}</div>
  );
}
