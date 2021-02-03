import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import styles from "./index.module.css";

import { Hero, CallToAction, Blog, Stream } from "../sections";

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Flacko</title>
        </Head>
        <div className={styles.container}>
          <Hero />
          <Stream />
          <Blog posts={allPosts} />
          <CallToAction />
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
