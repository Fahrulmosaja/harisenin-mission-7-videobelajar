import React, { Fragment } from 'react'

import PageHead from '../../commons/PageHead';
import AuthNavbar from './AuthNavbar';

interface AuthLayoutProps {
  title: string
  children: React.ReactNode
}

const AuthLayout = ({ title, children }: AuthLayoutProps) => {
  return (
    <Fragment>
      <PageHead title={title} />
      <header className="w-full fixed top-0 bg-white overflow-x-hidden">
        <AuthNavbar />
      </header>
      <main className="h-screen flex items-center max-w-screen-3xl 3xl:container overflow-x-hidden">
        {children}
      </main>
    </Fragment>
  );
};

export default AuthLayout;