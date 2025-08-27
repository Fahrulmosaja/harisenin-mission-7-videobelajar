import React from 'react'
import AuthLayout from '../../../components/layouts/AuthLayout'
import AuthRegister from '../../../components/views/AuthElements/Register/index';

const RegisterPage = () => {
  return (
    <AuthLayout title="VideoBelajar | Register">
      <AuthRegister />
    </AuthLayout>
  )
}

export default RegisterPage