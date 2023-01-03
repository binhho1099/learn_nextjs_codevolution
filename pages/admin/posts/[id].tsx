import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Link from 'next/link';

PostDetail.propTypes = {};

function PostDetail({ coders }: any) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {coders.title}
      <button onClick={() => router.push('/admin')}>Back to user page</button>
      <Link href="/admin">admin</Link>
      <Link href="/admin">
        <button>page admin</button>
      </Link>
    </div>
  );
}

export const getStaticProps = async (context: any) => {
  const { params } = context;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = await res.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: { coders: data },
  };
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }],
    fallback: true,
  };
}

export default PostDetail;

<div style={{ background: 'red' }}></div>;
