const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-4 px-4 md:px-6 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-600 text-sm mb-2 md:mb-0">
          &copy; {new Date().getFullYear()} Wayzata DECA. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-[#003366]">
            <i className="ri-facebook-fill"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-[#003366]">
            <i className="ri-twitter-fill"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-[#003366]">
            <i className="ri-instagram-line"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-[#003366]">
            <i className="ri-linkedin-fill"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
