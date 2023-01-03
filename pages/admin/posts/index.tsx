import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';

Posts.propTypes = {};

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return {
    props: { coders: data },
  };
}; 

function Posts({ coders }: any) {
  const router = useRouter();

  const goToDetailPage = (id: number) => {
    router.push({
      pathname: '/admin/posts/[id]',
      query: {
        id: id,
      },
    });
  };

  return (
    <ul>
      {coders.map((coder: any) => {
        return (
          <li key={coder.id} onClick={() => goToDetailPage(coder.id)}>
            {coder.title}
          </li>
        );
      })}
    </ul>
  );
}

export default Posts;
