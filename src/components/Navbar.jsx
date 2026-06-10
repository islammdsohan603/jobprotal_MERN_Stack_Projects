'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TbMenuDeep } from 'react-icons/tb';
import { MdClose } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Find a Job', link: '/find-a-job' },
    { name: 'Companies', link: '/companies' },
    { name: 'Pricing', link: '/pricing' },
  ];

  const menuVariants = {
    hidden: {
      x: '100%',
    },
    visible: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 250,
        damping: 25,
      },
    },
    exit: {
      x: '100%',
      transition: {
        duration: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: 30,
    },
    visible: index => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <>
      <nav className="bg-linear-to-r from-gray-500 to-gray-800 text-white py-4">
        <div className="w-11/12 max-w-7xl mx-auto flex items-center justify-between p-4 rounded-xl bg-gray-900/50 backdrop-blur-md">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={120}
              height={50}
              className="cursor-pointer"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navItems.map(item => (
                <li key={item.name}>
                  <Link
                    href={item.link}
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <Link
                href="/login"
                className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
              >
                Login
              </Link>

              <Link
                href="/signup"
                className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <MdClose size={28} /> : <TbMenuDeep size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 text-white bg-black/60 backdrop-blur-sm z-40"
            />

            {/* Sidebar */}
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 h-screen w-72 bg-gray-900 z-50 shadow-2xl p-6 md:hidden"
            >
              {/* Close Button */}
              <div className="flex justify-end mb-10">
                <button onClick={() => setIsOpen(false)} className="text-white">
                  <MdClose size={28} />
                </button>
              </div>

              {/* Menu Items */}
              <ul className="space-y-6">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    custom={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href={item.link}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-white hover:text-blue-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.4,
                  },
                }}
                className="flex flex-col gap-4 mt-10"
              >
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="text-center px-4 py-3 text-white bg-gray-700 rounded-lg hover:bg-gray-600 transition"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  onClick={() => setIsOpen(false)}
                  className="text-center px-4 py-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition"
                >
                  Sign Up
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
