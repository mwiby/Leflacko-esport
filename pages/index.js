import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import { CallToAction, Blog } from "../sections";

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
