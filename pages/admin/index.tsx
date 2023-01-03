import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

Admin.propTypes = {};

function Admin(props: any) {
  return (
    <h1>
      Page admin
      <Link href="/admin/posts">Post</Link>
    </h1>
  );
}

export default Admin;
