import Link from "next/link";
import Image from "next/image";
import styles from "../styles/post.module.css";
import ConvertDate from "./convert-date";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ImageProps {
  posts: {
    title: string;
    slug: string;
    publishDate: string;
    eyecatch: {
      url: string;
      width: number;
      height: number;
    };
  }[];
}

export default function Posts({ posts }: ImageProps) {
  return (
    <div className={styles.gridContainer}>
      {posts.map(({ title, slug, eyecatch, publishDate }) => (
        <article className={styles.eachPost} key={slug}>
          <Link href={`/blog/${slug}`} legacyBehavior>
            <a>
              <figure className="round-image">
                <Image
                  src={eyecatch.url}
                  alt=""
                  layout="responsive"
                  width={eyecatch.width}
                  height={eyecatch.height}
                  sizes="(min-width:1152px) 500px ,50vw"
                />
              </figure>
              <h3 className={styles.gap}>{title}</h3>
              <div className={styles.publish}>
                <FontAwesomeIcon
                  icon={faClock}
                  size="lg"
                  color="var(--gray-25)"
                />
                <ConvertDate dateISO={publishDate} />
              </div>
            </a>
          </Link>
        </article>
      ))}
    </div>
  );
}
