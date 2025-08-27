import React from 'react'
import { Link } from 'react-router';

const AuthNavbar = () => {
  return (
    <nav className="flex justify-beetwen py-4 px-4 md:px-10 xl:px-20 transition-all duration-300">
      <Link to="/">
        <img
          className="w-38 xl:w-48"
          src="/logo/LogoVideoBelajar.png"
          alt="logo-video-belajar"
        />
      </Link>
    </nav>
  );
};

export default AuthNavbar;