import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import PrettyDate from "../components/prettyDate";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../utils/processPost";

export default function Home({ posts }) {
  console.log({ posts });
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        {posts.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <PrettyDate dateString={date} />
            </small>
          </li>
        ))}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getSortedPostsData();
  return {
    props: { posts }, // will be passed to the page component as props
  };
}
