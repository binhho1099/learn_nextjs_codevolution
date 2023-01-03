import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

type Props = {
  children: JSX.Element;
};

function Layout({ children }: Props) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
