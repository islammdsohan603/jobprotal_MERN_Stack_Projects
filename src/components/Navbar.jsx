'use client';

import Image from 'next/image';
import Link from 'next/link';
import { TbMenuDeep } from 'react-icons/tb';
import { MdClose } from 'react-icons/md';
const { useState } = require('react');

const Navbar = () => {
  const navItems = [
    { name: 'Find a Job', link: '/find-a-job' },
    { name: 'Companies', link: '/companies' },
    { name: 'Pricing', link: '/pricing' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-linear-to-r from-gray-500 to-gray-800 text-white py-4 ">
      <div className="w-10/12 mx-auto flex items-center justify-between p-4 rounded-xl bg-gray-900 bg-opacity-50">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={50}
            className="cursor-pointer"
          />
        </Link>

        <div className="hidden md:flex space-x-6">
          <ul className="flex items-center gap-4">
            {navItems.map(item => (
              <li key={item.name} className="hover:text-gray-300">
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition duration-300"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500 transition duration-300"
          >
            Sign Up
          </Link>
        </div>

        {/* mobile menu */}

        <button>
          {isOpen ? (
            <MdClose
              size={24}
              onClick={() => setIsOpen(false)}
              className="md:hidden text-white cursor-pointer"
            />
          ) : (
            <TbMenuDeep
              size={24}
              onClick={() => setIsOpen(true)}
              className="md:hidden text-white cursor-pointer"
            />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden w-2xl top-7 right-0 rounded-xl mt-5 bg-gray-900 bg-opacity-50 p-4">
          <ul className="flex flex-col space-y-4">
            {navItems.map(item => (
              <li key={item.name} className="hover:text-gray-300">
                <Link href={item.link} onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="  flex flex-col  mt-5  gap-4">
            <Link
              href="/login"
              className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition duration-300"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500 transition duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
