import styles from "../styles/two-column.module.css";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export function TwoColumn({ children }: LayoutProps) {
  return <div className={styles.flexContainer}>{children}</div>;
}

export function TwoColumnMain({ children }: LayoutProps) {
  return <div className={styles.main}>{children}</div>;
}

export function TwoColumnSidebar({ children }: LayoutProps) {
  return <div className={styles.sidebar}>{children}</div>;
}
