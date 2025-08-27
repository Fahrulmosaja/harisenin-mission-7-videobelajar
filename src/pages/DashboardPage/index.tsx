import React from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout';
import DashboardElements from '../../components/views/DashboardElements';

export const DashboardPage = () => {
  return (
    <DashboardLayout title="VideoBelajar | Dashboard">
      <DashboardElements />
    </DashboardLayout>
  );
};

export default DashboardPage;
