'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const linkHover = {
  hover: { x: 5, color: '#ffffff' },
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05070d] py-14">
      <div className="mx-auto w-10/12 max-w-7xl px-2 md:px-6">
        <div className="grid gap-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/20 md:grid-cols-4 md:p-8">
          <div>
            <h3 className="text-xl font-bold text-white">JobPortal</h3>
            <p className="mt-3 max-w-xs text-sm leading-6 text-gray-400">
              Connecting talent with opportunity.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white">Jobs</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-400">
              {[
                { name: 'Remote Jobs', href: '/jobs' },
                { name: 'Full Time', href: '/jobs' },
                { name: 'Part Time', href: '/jobs' },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover="hover"
                  variants={linkHover}
                  className="cursor-pointer"
                >
                  <Link href={item.href}>{item.name}</Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-400">
              {[
                { name: 'About', href: '/about' },
                { name: 'Contact', href: '/contact' },
                { name: 'Careers', href: '/careers' },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover="hover"
                  variants={linkHover}
                  className="cursor-pointer"
                >
                  <Link href={item.href}>{item.name}</Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Follow Us</h4>

            <div className="mt-4 flex gap-3 text-gray-400">
              <motion.a
                whileHover={{ scale: 1.12, color: '#fff' }}
                href="https://linkedin.com"
                target="_blank"
                className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/5 text-xl transition-colors"
              >
                <FaLinkedin />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.12, color: '#fff' }}
                href="https://github.com"
                target="_blank"
                className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/5 text-xl transition-colors"
              >
                <FaGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.12, color: '#fff' }}
                href="https://twitter.com"
                target="_blank"
                className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/5 text-xl transition-colors"
              >
                <FaTwitter />
              </motion.a>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-gray-500"
        >
          &copy; 2026 JobPortal. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
