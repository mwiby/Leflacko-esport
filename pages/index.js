import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";

import { CallToAction, Blog, Stream } from "../sections";

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Flacko</title>
        </Head>
        <Container>
          <Intro />
        </Container>
        <Stream />
        <Blog posts={allPosts} />
        <CallToAction />
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
