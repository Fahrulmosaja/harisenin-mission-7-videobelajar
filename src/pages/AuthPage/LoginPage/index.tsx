import React from 'react'
import AuthLayout from '../../../components/layouts/AuthLayout';
import AuthLogin from '../../../components/views/AuthElements/AuthLogin';

const LoginPage = () => {
  return (
    <AuthLayout title="VideoBelajar | Login">
      <AuthLogin />
    </AuthLayout>
  )
}

export default LoginPage;