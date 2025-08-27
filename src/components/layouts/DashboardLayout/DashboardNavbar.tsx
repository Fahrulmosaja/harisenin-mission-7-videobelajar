import React from 'react'
import { Link } from 'react-router';
import Button from '../../fragment/Button';
import { RiCloseLine, RiMenuLine } from '@remixicon/react';

const DashboardNavbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

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
              <Link
                className="text-poppins text-base font-semibold text-textDark-secondary hover:text-main-primary"
                to={"/login"}
              >
                Kategori
              </Link>
            </li>

            <li>
              <Link
                to={"/login"}
              >
                <img
                  className="w-10 h-10 object-cover rounded-md"
                  src="/profile/profileUser.png"
                  alt="profile-user"
                />
              </Link>
            </li>
          </ul>
        </div>

        <Button
          type='button'
          variant='default'
          className='md:hidden'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <RiCloseLine /> : <RiMenuLine />}
        </Button>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 py-6 w-full items-center justify-center ">
          <li>
            <Link
              className="text-poppins text-base font-semibold text-textDark-secondary hover:text-main-primary"
              to={"/login"}
            >
              Kategori
            </Link>
          </li>
        </ul>
      )}
    </nav >
  );
};

export default DashboardNavbar;