import React, { useState, useEffect } from 'react';
import signatureLogo from '../assets/darkTransLogo.png';

// Signature Logo Component
const SignatureLogo = () => (
  <img
    src={signatureLogo}
    alt="Signature Logo"
    className="w-24 sm:w-28 h-auto invert transition-all duration-300"
  />
);

const Navbar = ({ isContactVisible }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'pt-4' : 'pt-0'}`}
      >
        <div
          style={{
            width: isScrolled ? '90%' : '100%',
            borderRadius: isScrolled ? '2rem' : '0',
            margin: '0 auto',
            transition: 'width 0.3s ease-in-out, border-radius 0.7s ease-in-out',
            boxShadow: isScrolled ? '0 4px 32px rgba(0,0,0,0.4)' : 'none',
            backdropFilter: isScrolled ? 'blur(8px)' : 'blur(2px)'
          }}
          className={`bg-gradient-to-r ${isScrolled
            ? 'from-[#1a1a1a]/40 via-[#2d2d2d]/50 to-[#1a1a1a]/40 shadow-2xl'
            : 'from-[#000000]/95 via-[#2d2d2d]/95 to-[#000000]/95'
          } transition-colors duration-700`}
        >
          <nav className="flex justify-between items-center py-2 px-4 sm:px-6">
            <div className="flex items-center">
              <a href="#home" onClick={() => setActiveLink('Home')}>
                <SignatureLogo />
              </a>
            </div>

            <div className="hidden md:flex items-center px-3 py-2 rounded-full space-x-1 lg:space-x-2">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  onClick={() => setActiveLink(item.name)}
                  className={`px-4 lg:px-5 hover:scale-105 py-1 text-md font-medium rounded-full transition-colors duration-300
                    ${activeLink === item.name
                      ? 'scale-105 text-white font-bold'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              {!isContactVisible && (
                <a
                  href="#contact"
                  onClick={() => setActiveLink('Contact')}
                  className="hidden md:inline-block bg-white text-black font-semibold px-3 py-1 rounded-xl
                           transition-transform transform hover:scale-95 hover:bg-white/5
                           content-box border-2 border-transparent hover:border-white hover:text-white"
                >
                  Contact Me
                </a>
              )}
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
        </div>
      </header>

      {/* --- Mobile Menu --- */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-gradient-to-b from-[#2d2d2d] to-[#000000]
          z-40 flex flex-col justify-center items-center transition-opacity duration-300 ease-in-out md:hidden
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <ul className="flex flex-col items-center space-y-6 mb-8">
          {mobileNavLinks.map((item) => (
            <li key={item.name}>
              <a
                href={`#${item.id}`}
                onClick={() => { setActiveLink(item.name); closeMenu(); }}
                className={`text-2xl font-semibold transition px-6 py-2 rounded-full
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
        {!isContactVisible && (
          <a
            href="#contact"
            onClick={() => { setActiveLink('Contact'); closeMenu(); }}
            className="bg-white text-black font-semibold px-8 py-3 rounded-full
                     transition-transform transform hover:scale-95
                     border-2 border-transparent hover:bg-white/5 hover:border-2 hover:text-white"
          >
            Contact Me
          </a>
        )}
      </div>
    </>
  );
};

export default Navbar;