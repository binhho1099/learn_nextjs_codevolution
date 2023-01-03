import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

function NotFound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <div>
      <h1>Oppps</h1>
    </div>
  );
}

export default NotFound;
