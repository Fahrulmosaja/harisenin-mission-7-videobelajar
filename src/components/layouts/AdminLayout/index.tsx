import React, { Fragment } from 'react'

import PageHead from '../../commons/PageHead';
import AdminNavbar from './AdminNavbar';

interface AuthLayoutProps {
  title: string
  children: React.ReactNode
}

const AdminLayout = ({ title, children }: AuthLayoutProps) => {
  return (
    <Fragment>
      <PageHead title={title} />
      <header className="w-full fixed z-9999 top-0 left-0 bg-[#21222D] shadow-md overflow-x-hidden">
        <AdminNavbar />
      </header>
      <main className="max-w-screen-3xl min-h-screen 3xl:container p-4 bg-[#171821] overflow-x-hidden">
        {children}
      </main>
    </Fragment>
  );
};

export default AdminLayout;