'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const linkHover = {
  hover: { x: 5, color: '#ffffff' },
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black py-12">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white">JobPortal</h3>
            <p className="mt-3 text-gray-400">
              Connecting talent with opportunity.
            </p>
          </div>

          {/* Jobs */}
          <div>
            <h4 className="font-semibold text-white">Jobs</h4>
            <ul className="mt-3 space-y-2 text-gray-400">
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

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white">Company</h4>
            <ul className="mt-3 space-y-2 text-gray-400">
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

          {/* Social Icons */}
          <div>
            <h4 className="font-semibold text-white">Follow Us</h4>

            <div className="mt-4 flex gap-4 text-gray-400">
              <motion.a
                whileHover={{ scale: 1.2, color: '#fff' }}
                href="https://linkedin.com"
                target="_blank"
                className="text-2xl"
              >
                <FaLinkedin />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2, color: '#fff' }}
                href="https://github.com"
                target="_blank"
                className="text-2xl"
              >
                <FaGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2, color: '#fff' }}
                href="https://twitter.com"
                target="_blank"
                className="text-2xl"
              >
                <FaTwitter />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-500"
        >
          © 2026 JobPortal. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
