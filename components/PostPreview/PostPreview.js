import Avatar from "../../components/avatar";
import Link from "next/link";
import styles from "./PostPreview.module.css";

export default function PostPreview({
  title,
  coverImage,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className={styles.container}>
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a className={styles.postLink} aria-label={title}>
          <img
            className={styles.coverImg}
            src={coverImage}
            alt="Cover image for blog post"
          />

          <div>
            <div className={styles.pill}>CoD</div>
            <h3>{title}</h3>
            <div>
              <p>{excerpt}</p>
              <Avatar name={author.name} picture={author.picture} />
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
