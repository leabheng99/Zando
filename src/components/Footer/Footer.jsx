import React from 'react';
import { Link, Links } from 'react-router-dom';
import { FaFacebookF, FaTiktok, FaTelegram } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="w-full px-4 sm:px-10 lg:px-24 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-white">NPIC</h1>
          <p>High-quality products for everyone. Fast shipping & amazing deals.</p>
          <div className="flex gap-3 mt-2">
            <Link to={""} target='_blank' className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition"><FaFacebookF /></Link>
            <Link to={""} target='_blank' className="p-2 bg-gray-800 rounded-full hover:bg-pink-500 transition"><FaMessage /></Link>
            <Link to={""} target='_blank' className="p-2 bg-gray-800 rounded-full hover:bg-blue-400 transition"><FaTiktok /></Link>
            <Link to={""} target='_blank' className="p-2 bg-gray-800 rounded-full hover:bg-blue-700 transition"><FaTelegram /></Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/shop" className="hover:text-white transition">Shop</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h2 className="font-semibold text-white mb-4">Categories</h2>
          <ul className="space-y-2">
            <li><Link to="/product/women" className="hover:text-white transition">Women</Link></li>
            <li><Link to="/product/men" className="hover:text-white transition">Men</Link></li>
            <li><Link to="/product/boys" className="hover:text-white transition">Boys</Link></li>
            <li><Link to="/product/girls" className="hover:text-white transition">Girls</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="font-semibold text-white mb-4">Contact</h2>
          <p className='my-2'>Email: Hyleabheng.bbu@gmail.com</p>
          <p className='my-2'>Phone: +855 81 611 787</p>
          <p className='my-2'>Address: Phnom Penh, Cambodia</p>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-500 text-sm">
        &copy; 2026 HY LEABHENG. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
