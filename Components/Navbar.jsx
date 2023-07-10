import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../public/images/logo.png"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-row sm:flex-row justify-evenly sm:justify-evenly items-center bg-white text-black p-4">
      {/* Logo */}
      <div className="flex items-center mb-4 sm:mb-0">
        <Image src={logo} alt="Logo"  width={200} height={400}  className="h-8 mr-2" />
        {/* <span className="text-lg font-bold">Your Logo</span> */}
      </div>

      {/* Hamburger Menu */}
      <div className="flex items-center sm:hidden">
        <AiOutlineMenu
          className="h-6 w-6 text-white cursor-pointer"
          onClick={handleMenuToggle}
        />
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } sm:flex flex-col sm:flex-row items-center`}
      >
        <Link href="/" className="py-2 px-4 hover:bg-gray-700 rounded">
          Company
        </Link>
        <Link href="/about" className="py-2 px-4 hover:bg-gray-700 rounded">
          Investment plan
        </Link>
        <Link href="/contact" className="py-2 px-4 hover:bg-gray-700 rounded">
          FAQ
        </Link>
        <Link href="/contact" className="py-2 px-4 hover:bg-gray-700 rounded">
         Learn
        </Link>
      </div>

      {/* Sign In and Login Buttons */}
      <div className="flex flex-row sm:flex-row">
        <button className="mr-4 py-2 px-8  text-[#0B4CAD] border-r-2 border-[#0B4CAD] ">
         Login
        </button>
        <button className="py-2 px-7 bg-[#0B4CAD] text-white rounded-xl">
        Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
