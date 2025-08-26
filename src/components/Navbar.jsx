import React, { useState, useEffect } from 'react';

// 1. Import the image file like a module.
// Make sure the path is correct relative to this Navbar.jsx file.
import signatureLogo from '../assets/darkTransLogo.png';

// This component now uses the imported image.
const SignatureLogo = () => (
    <img 
        src={signatureLogo} 
        alt="Signature Logo" 
        className="w-24 h-auto"
    />
);


const Navbar = () => {
    // State to manage if the navbar has been scrolled
    const [isScrolled, setIsScrolled] = useState(false);
    // State to manage the mobile menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // State to track the active navigation link
    const [activeLink, setActiveLink] = useState('Home');

    // Effect to handle scroll event
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Function to toggle the mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    // Function to close the mobile menu (used by links)
    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    const navLinks = ['Home', 'Skills', 'Projects', 'About'];
    const mobileNavLinks = ['Home', 'Skills', 'Projects', 'About', 'Contact'];


    return (
        <>
            {/* --- Navigation Bar --- */}
            <header 
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white shadow-md py-2' : 'py-2'}`}
            >
                <nav className="container mx-auto px-6 flex justify-between items-center">
                    
                    {/* Logo */}
                    <a href="#" className="text-2xl font-bold text-gray-800" onClick={() => setActiveLink('Home')}>
                        <SignatureLogo />
                    </a>

                    {/* Desktop Menu - Centered Pill Navigation */}
                    <div className="hidden md:flex items-center bg-gray-100/80 backdrop-blur-sm p-1 rounded-full">
                        {navLinks.map((item) => (
                             <a 
                                key={item}
                                href="#" 
                                onClick={() => setActiveLink(item)}
                                className={`px-5 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${activeLink === item ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Contact Button */}
                    <div className="hidden md:flex">
                        <a href="#" className="bg-gray-800 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-900 transition duration-300">
                            Contact Me
                        </a>
                    </div>


                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="hamburger-icon z-50">
                            <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${isMenuOpen ? 'transform translate-y-1.5 rotate-45' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-gray-800 my-1 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${isMenuOpen ? 'transform -translate-y-1.5 -rotate-45' : ''}`}></span>
                        </button>
                    </div>
                </nav>
            </header>

            {/* --- Mobile Menu Overlay --- */}
            <div 
                className={`fixed top-0 left-0 w-full h-full bg-white z-40 flex justify-center items-center transition-opacity duration-400 ease-in-out md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            >
                <ul className="flex flex-col items-center space-y-8">
                    {mobileNavLinks.map((item) => (
                         <li key={item}>
                            <a href="#" onClick={closeMenu} className="text-gray-800 text-3xl font-semibold">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Navbar;
