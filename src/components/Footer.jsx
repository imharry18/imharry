import React from 'react';

// In your project, you would use: import logoTrans from "../assets/logoTrans.png";
import logoTrans from "../assets/logoTrans.png" //

const Logo = () => (
  // The logo in the brand section
  <img src={logoTrans} className="w-32" alt="Logo" style={{ filter: 'brightness(0) invert(1)' }} />
);

const Footer = () => {
  const footerSections = [
    {
      title: 'Pages',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'About', href: '#projects' }, // Points to projects section as 'about' is there
      ],
    },
    {
      title: 'Socials',
      links: [
        { name: "GitHub", href: "https://github.com/imharry18" },
        { name: "Twitter", href: "https://x.com/imharrry_18" },
        { name: "Gmail", href: "mailto:iharish0018@gmail.com" },
        { name: "WhatsApp", href: "https://wa.me/917780988037" },
        { name: "Telegram", href: "https://t.me/imharry18" },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/imharry18/" }
      ],
    },
    {
      title: 'Contact Me',
      links: [
        { name: 'Collaboration', href: '#contact' },
        { name: 'Job Opportunities', href: '#contact' },
        { name: 'Freelance Projects', href: '#contact' },
        { name: 'Internships', href: '#contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-[#111111] text-gray-300 font-sans overflow-hidden py-16 px-6 sm:px-8 lg:px-16 pt-32 pb-10">

      {/* Content Container */}
      <div className="container mx-auto">
        {/* A robust, responsive grid for the main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Brand and Copyright Section */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-sm text-gray-400">
              &copy; copyright imHarry {new Date().getFullYear()}.<br /> All rights reserved.
            </p>
          </div>

          {/* Links Sections Wrapper */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h3 className="font-semibold text-white mb-5">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a 
                          href={link.href} 
                          // Open social links in new tab, but not internal page links
                          target={link.href.startsWith('http') ? '_blank' : '_self'} 
                          rel="noopener noreferrer" 
                          className="hover:text-white transition-colors duration-300 text-gray-400 text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image Container: Positioned below the content, as you intended */}
      <div className="container mx-auto mt-28">
        <div className="flex items-center justify-center">
            <img
              src={logoTrans}
              alt="Background Logo"
              className="object-contain w-full max-w-4xl pointer-events-none select-none"
              style={{
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.05))',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.2))',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskSize: '100% 100%',
                WebkitMaskSize: '100% 100%',
              }}
            />
        </div>
      </div>
    </footer>
  );
};


export default Footer;