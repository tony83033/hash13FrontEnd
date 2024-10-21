"use client"

import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black px-6 lg:px-8 overflow-hidden text-white py-16 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">#13</h2>
          <p className="text-sm mb-6">LEARN TO LEAD</p>
          <p className="text-gray-400 mb-6">
            Lorem ipsum amet, consectetur adipiscing elit. Suspendis varius enim eros elementum tristique. Duis cursus.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-700 p-3 rounded">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-gray-700 p-3 rounded">
              <FaTwitter />
            </a>
            <a href="#" className="bg-gray-700 p-3 rounded">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Registration</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Courses</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Tearms of Use</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Tearm & Condition</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Payment Method</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Licensencing</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Join over <span className="text-red-500">68,000</span> people getting our emails. Lorem ipsum dolor sit amet.
          </p>
          <form className="flex flex-col">
            <input
              type="email"
              placeholder="Enter your mail"
              className="p-3 rounded mb-4 text-black"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto mt-16 text-center text-gray-400">
        <p>© Copyright 2024 Hah13 | Designed & Developed by LinuxWorld | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
