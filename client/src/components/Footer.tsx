import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-4 px-3 md:px-6 mt-auto relative overflow-hidden">
      {/* Decorative elements - hidden on mobile */}
      <div className="absolute -right-16 top-0 h-full w-64 bg-[#FFD700] opacity-5 transform rotate-12 hidden sm:block"></div>
      <div className="absolute -left-20 -bottom-8 h-16 w-40 bg-[#003366] opacity-5 rounded-full hidden sm:block"></div>
      <div className="absolute right-[40%] -bottom-10 h-20 w-20 bg-[#E63946] opacity-5 rounded-full hidden sm:block"></div>
      <div className="absolute left-[40%] -top-5 h-12 w-48 bg-[#2C7BE5] opacity-5 transform -rotate-45 hidden sm:block"></div>
      
      {/* Main footer content with better mobile support */}
      <div className="container mx-auto relative z-10">
        {/* Social media icons - top on mobile, right side on desktop */}
        <div className="flex justify-center md:hidden mb-3 gap-6">
          <a href="#" className="text-gray-600 hover:text-[#003366] transition-colors">
            <FaFacebook className="text-lg" />
          </a>
          <a href="#" className="text-gray-600 hover:text-[#003366] transition-colors">
            <FaTwitter className="text-lg" />
          </a>
          <a href="#" className="text-gray-600 hover:text-[#003366] transition-colors">
            <FaInstagram className="text-lg" />
          </a>
          <a href="#" className="text-gray-600 hover:text-[#003366] transition-colors">
            <FaLinkedin className="text-lg" />
          </a>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pb-16 md:pb-0">
          {/* Copyright section */}
          <div className="flex items-center text-gray-600 text-sm mb-3 md:mb-0 text-center md:text-left">
            <span className="text-[#003366] font-medium mr-1">DECA</span>
            &copy; {new Date().getFullYear()} Wayzata DECA. All rights reserved.
          </div>
          
          {/* Links section */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            {/* Stacked on mobile, horizontal on desktop */}
            <div className="flex gap-3 md:gap-4 flex-wrap justify-center mb-2 md:mb-0">
              <a 
                href="https://www.deca.org/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-[#003366] text-xs"
              >
                DECA.org
              </a>
              <a 
                href="https://www.mndeca.org/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-[#003366] text-xs"
              >
                Minnesota DECA
              </a>
              <a 
                href="https://decadirect.org/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-[#003366] text-xs font-medium"
              >
                DECA Direct
              </a>
            </div>
            
            {/* Divider - only visible on desktop */}
            <div className="hidden md:block h-3 w-px bg-gray-300 mx-1"></div>
            
            {/* Social icons - only visible on desktop */}
            <div className="hidden md:flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-[#003366] transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#003366] transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#003366] transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#003366] transition-colors">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
