import React from 'react'
import { Link } from 'react-router';

import Button from '../../fragment/Button';

const AdminNavbar = () => {
  return (
    <nav className="max-w-[1250px] mx-auto py-4 px-4 transition-all duration-300">
      <div className="relative flex items-center justify-between w-full">
        <img
          className="w-38 md:w-48"
          src="/logo/LogoVideoBelajar.png"
          alt="logo-video-belajar"
        />
        <div className="hidden md:block">
          <ul className="md:flex items-center gap-3">
            <li>
              <Button
                className="text-poppins text-sm font-semibold text-default-white py-2 px-4 rounded-md"
                type="button"
                variant="btn-primary"
              >
                <Link
                  to={"/"}
                >
                  Beranda
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav >
  )
}

export default AdminNavbar