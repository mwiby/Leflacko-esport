import styles from "./Blog.module.css";
import { PostPreview } from "../../components";

export default function Blog({ posts }) {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h2>Reading Recommendation</h2>
        <p>See my latest posts.</p>
      </div>
      <div className={styles.grid}>
        {posts.map(({ title, coverImage, date, excerpt, author, slug }) => {
          return (
            <div key={slug} className={styles.postContainer}>
              <PostPreview
                title={title}
                coverImage={coverImage}
                excerpt={excerpt}
                author={author}
                slug={slug}
              />
            </div>
          );
        })}
      </div>

      {/*<button>See More</button>*/}
    </section>
  );
}
