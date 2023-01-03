import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <nav>
      <div>
        <Link href="/">Logo</Link>
      </div>
      <div>
        <Link href="/admin">Admin</Link>
        <Link href="/user">User</Link>
      </div>
    </nav>
  );
}

export default Navbar;
