'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { TbMenuDeep } from 'react-icons/tb';
import { MdClose } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import { authClient, useSession } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';
import { toast } from 'react-toastify';

const AuthSkeleton = ({ mobile = false }) => (
  <div
    className={`flex items-center gap-3 ${mobile ? 'w-full' : 'min-w-56'}`}
    aria-label="Loading account"
  >
    <div className="size-10 animate-pulse rounded-full bg-white/15" />
    <div className="flex-1 space-y-2">
      <div className="h-3 w-24 animate-pulse rounded-full bg-white/15" />
      <div className="h-3 w-16 animate-pulse rounded-full bg-white/10" />
    </div>
  </div>
);

const UserActions = ({ handleSignOut, mobile = false, userInitial, users }) => (
  <div
    className={`flex ${
      mobile
        ? 'w-full flex-col items-stretch gap-4'
        : 'items-center gap-3 rounded-full border border-white/10 bg-white/5 py-1.5 pl-2 pr-2'
    }`}
  >
    <div
      className={`flex items-center gap-3 ${
        mobile
          ? 'rounded-2xl border border-white/10 bg-white/5 p-3'
          : 'min-w-0 pr-1'
      }`}
    >
      <Avatar
        name={userInitial}
        src={users?.image}
        className="shrink-0 bg-blue-600 text-white"
      />
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-white">
          {users?.name || 'User'}
        </p>
        <p className="truncate text-xs text-gray-400">
          {users?.email || 'Signed in'}
        </p>
      </div>
    </div>

    <button
      onClick={handleSignOut}
      className={`rounded-full border border-red-400/30 bg-red-500/15 px-4 py-2 text-sm font-semibold text-red-100 transition hover:border-red-300/60 hover:bg-red-500/25 ${
        mobile ? 'w-full' : ''
      }`}
    >
      Logout
    </button>
  </div>
);

const GuestActions = ({ mobile = false, onNavigate }) => (
  <div className={`flex ${mobile ? 'flex-col gap-3' : 'items-center gap-3'}`}>
    <Link
      href="/login"
      onClick={onNavigate}
      className={`rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10 ${
        mobile ? 'w-full' : ''
      }`}
    >
      Login
    </Link>

    <Link
      href="/signup"
      onClick={onNavigate}
      className={`rounded-full bg-blue-600 px-5 py-2.5 text-center text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-500 ${
        mobile ? 'w-full' : ''
      }`}
    >
      Sign Up
    </Link>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { data: session, isPending } = useSession();
  const router = useRouter();

  const users = session?.user;
  const userInitial = users?.name?.charAt(0)?.toUpperCase() || 'U';

  const handleSignOut = () => {
    authClient.signOut();
    toast.success('Signed out successfully!');
    router.push('/');
  };

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
      <nav className="sticky top-0 z-30 border-b border-white/10 bg-gray-950/85 py-3 text-white shadow-lg shadow-gray-950/10 backdrop-blur-xl">
        <div className="mx-auto flex w-11/12 max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 shadow-2xl shadow-black/10 md:px-5">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="logo"
              width={120}
              height={50}
              className="cursor-pointer"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">
            <ul className="flex items-center gap-2 rounded-full border border-white/10 bg-gray-950/40 p-1">
              {navItems.map(item => {
                const isActive = pathname === item.link;

                return (
                  <li key={item.name} className="relative">
                    <Link
                      href={item.link}
                      className={`relative z-10 block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                        isActive
                          ? 'text-white'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </Link>

                    {isActive && (
                      <motion.div
                        layoutId="active-navbar"
                        className="absolute inset-0 rounded-full bg-blue-600"
                        transition={{
                          type: 'spring',
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="flex min-w-56 items-center justify-end">
              {isPending ? (
                <AuthSkeleton />
              ) : users ? (
                <UserActions
                  handleSignOut={handleSignOut}
                  userInitial={userInitial}
                  users={users}
                />
              ) : (
                <GuestActions />
              )}
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <MdClose size={28} className="cursor-pointer" />
            ) : (
              <TbMenuDeep size={28} className="cursor-pointer" />
            )}
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
              className="fixed inset-0 z-40 bg-black/65 text-white backdrop-blur-sm"
            />

            {/* Sidebar */}
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed right-0 top-0 z-50 h-screen w-80 max-w-[88vw] border-l border-white/10 bg-gray-950 p-6 text-white shadow-2xl md:hidden"
            >
              {/* Close Button */}
              <div className="mb-8 flex items-center justify-between">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={105}
                  height={44}
                  className="cursor-pointer"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="grid size-10 cursor-pointer place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                  aria-label="Close menu"
                >
                  <MdClose size={28} />
                </button>
              </div>

              {/* Menu Items */}
              <ul className="space-y-2">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.link;

                  return (
                    <motion.li
                      key={item.name}
                      custom={index}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      className="relative list-none"
                    >
                      <Link
                        href={item.link}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                          isActive
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-950/20'
                            : 'text-gray-300 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        {item.name}
                      </Link>

                      {isActive && (
                        <motion.div
                          layoutId="active-mobile-link"
                          className="absolute bottom-1 left-4 right-4 h-[3px] rounded-full bg-blue-300"
                          transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}
                    </motion.li>
                  );
                })}
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
                className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6"
              >
                {isPending ? (
                  <AuthSkeleton mobile />
                ) : users ? (
                  <UserActions
                    handleSignOut={handleSignOut}
                    mobile
                    userInitial={userInitial}
                    users={users}
                  />
                ) : (
                  <GuestActions mobile onNavigate={() => setIsOpen(false)} />
                )}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
