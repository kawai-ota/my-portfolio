import styles from "../styles/post-body.module.css";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function PostBody({ children }: LayoutProps) {
  return <div className={styles.stack}>{children}</div>;
}
