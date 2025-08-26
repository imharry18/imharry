import React, { useState, useEffect } from 'react';

// You can place this SVG component in its own file or keep it here.
const SignatureLogo = () => (
    <svg className="w-24 h-auto" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 25.5C2.5 25.5 10.5 4.5 25 25.5C39.5 46.5 42.5 15.5 57.5 25.5C72.5 35.5 75.5 4.5 97.5 25.5" stroke="#1F2937" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
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
