import React, { Fragment } from 'react'

import PageHead from '../../commons/PageHead';
import LandingNavbar from './LandingNavbar';
import Footer from '../../fragment/Footer';

interface AuthLayoutProps {
  title: string
  children: React.ReactNode
}

const LandingLayout = ({ title, children }: AuthLayoutProps) => {
  return (
    <Fragment>
      <PageHead title={title} />
      <header className="w-full fixed z-9999 top-0 left-0 bg-white shadow-md overflow-x-hidden">
        <LandingNavbar />
      </header>
      <main className="max-w-screen-3xl 3xl:container p-4">
        {children}
      </main>
      <footer className="max-w-screen-3xl 3xl:container p-4 bg-white">
        <Footer />
      </footer>
    </Fragment>
  );
};

export default LandingLayout;