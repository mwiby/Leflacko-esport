import Head from "next/head";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "../lib/constants";

export default function Meta() {
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/images/logo1.png" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/logo1.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/logo1.png"
      />
      <link rel="manifest" href="/images/site.webmanifest" />
      <link rel="mask-icon" href="/images/logo1.png" color="#000000" />
      <link rel="shortcut icon" href="/images/logo1.png" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/images/logo1.png" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={`Blog by Call of Duty player Flacko`} />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  );
}
