const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-4 px-4 md:px-6 mt-auto relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -right-16 top-0 h-full w-64 bg-[#FFD700] opacity-5 transform rotate-12"></div>
      <div className="absolute -left-20 -bottom-8 h-16 w-40 bg-[#003366] opacity-5 rounded-full"></div>
      
      {/* Trophy decorations */}
      <div className="absolute right-[15%] bottom-0 text-[#FFD700] opacity-10">
        <i className="ri-trophy-line text-sm"></i>
      </div>
      <div className="absolute left-[25%] top-1 text-[#003366] opacity-10">
        <i className="ri-medal-line text-sm"></i>
      </div>
      
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
        <div className="flex items-center text-gray-600 text-sm mb-2 md:mb-0">
          <span className="text-[#003366] font-medium mr-1">DECA</span>
          &copy; {new Date().getFullYear()} Wayzata DECA. All rights reserved.
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://www.deca.org/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#003366] text-xs">
            DECA.org
          </a>
          <a href="https://www.mndeca.org/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#003366] text-xs">
            Minnesota DECA
          </a>
          <a href="https://www.wayzataschools.org/whs" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#003366] text-xs">
            Wayzata High School
          </a>
          <div className="h-3 w-px bg-gray-300 mx-1"></div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-[#003366] transition-colors">
              <i className="ri-facebook-fill"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-[#003366] transition-colors">
              <i className="ri-twitter-fill"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-[#003366] transition-colors">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-[#003366] transition-colors">
              <i className="ri-linkedin-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
