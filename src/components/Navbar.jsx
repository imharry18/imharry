import React, { useState } from 'react';
import dpimharry from "../assets/dpimage.jpg";   
import signatureLogo from '../assets/darkTransLogo.png';

// Signature Logo Component
const SignatureLogo = () => (
  <img 
    src={signatureLogo} 
    alt="Signature Logo" 
    className="w-28 h-auto invert"  // bigger logo
  />
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'About', id: 'about' }
  ];
  const mobileNavLinks = [...navLinks, { name: 'Contact', id: 'contact' }];

  return (
    <>
      {/* --- Navigation Bar --- */}
      <header 
        className="fixed top-0 left-0 w-full z-50 px-3 py-3 shadow-lg backdrop-blur-md
                   bg-gradient-to-r from-[#000000] via-[#2d2d2d] to-[#000000]"
      >
        <nav className="container mx-auto flex justify-between items-center px-4">
          
          {/* Left side: Profile Avatar + Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={dpimharry} 
              alt="profile" 
              className="w-11 h-11 rounded-md object-cover border-2 border-white hover:scale-105 transition-transform duration-200"
            />
            <a className='pl-3' href="#home" onClick={() => setActiveLink('Home')}>
              <SignatureLogo />
            </a>
          </div>

          {/* Center: Desktop Menu */}
          <div className="hidden md:flex items-center bg-black/30 backdrop-blur-sm px-3 py-2 rounded-full space-x-4">
            {navLinks.map((item) => (
              <a 
                key={item.name}
                href={`#${item.id}`}
                onClick={() => setActiveLink(item.name)}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-colors duration-300
                  ${activeLink === item.name 
                    ? 'bg-white/10 text-white shadow-md' 
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right side: Contact Me button (desktop) + Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Contact Button - Desktop */}
            <a 
              href="#contact"
              onClick={() => setActiveLink('Contact')}
              className="hidden md:inline-block bg-white text-black font-semibold px-5 py-1.5 rounded-xl
                        transition-transform transform hover:scale-95 hover:bg-white/5 
                        content-box border-2 border-transparent hover:border-white hover:text-white"
            >
              Contact Me
            </a>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="z-50 relative">
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out 
                  ${isMenuOpen ? 'translate-y-1.5 rotate-45' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white my-1 transition-all duration-300 ease-in-out 
                  ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out 
                  ${isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''}`}></span>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 left-0 w-full h-full bg-gradient-to-b from-[#2d2d2d] to-[#000000] 
          z-40 flex flex-col justify-center items-center transition-opacity duration-300 ease-in-out md:hidden 
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <ul className="flex flex-col items-center space-y-8 mb-8">
          {mobileNavLinks.map((item) => (
            <li key={item.name}>
              <a 
                href={`#${item.id}`}
                onClick={() => {
                  setActiveLink(item.name);
                  closeMenu();
                }}
                className={`text-3xl font-semibold transition px-6 py-2 rounded-full
                  ${activeLink === item.name 
                    ? 'bg-white/10 text-white shadow-md' 
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Contact Button */}
        <a 
  href="#contact"
  onClick={() => {
    setActiveLink('Contact');
    closeMenu();
  }}
  className="bg-white text-black font-semibold px-8 py-3 rounded-full 
             transition-transform transform hover:scale-95 
             border-2 border-transparent hover:bg-white/5 hover:border-2 hover:text-white"
>
  Contact Me
</a>

      </div>
    </>
  );
};

export default Navbar;
