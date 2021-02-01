import styles from "./Blog.module.css";
import { PostPreview } from "../../components";

export default function Blog({ posts }) {
  return (
    <section className={styles.container}>
      {posts.map(({ title, coverImage, date, excerpt, author, slug }) => {
        return (
          <div>
            <PostPreview
              title={title}
              coverImage={coverImage}
              date={date}
              excerpt={excerpt}
              author={author}
              slug={slug}
            />
          </div>
        );
      })}
      <button>See More</button>
    </section>
  );
}
