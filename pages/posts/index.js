import Head from "next/head";
import { Fragment } from "react";

import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="All posts" />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

// 매 요청마다 모든 게시물을 가져올 필요는 없으니 getServerSideProps는 사용할 필요가 없다.
export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
