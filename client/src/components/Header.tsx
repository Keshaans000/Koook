import { Link } from "wouter";

const Header = () => {
  return (
    <header className="bg-[#003366] shadow-md z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <a className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#FFD700] flex items-center justify-center rounded-md">
                <span className="text-[#003366] font-bold text-lg">W</span>
              </div>
              <h1 className="text-white font-bold text-xl hidden md:block">Wayzata DECA</h1>
            </a>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input 
              type="text" 
              placeholder="Search events..." 
              className="px-4 py-2 rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-[#FFD700]" 
            />
            <i className="ri-search-line absolute right-3 top-2.5 text-gray-500"></i>
          </div>
          <button className="text-white p-2 rounded-full hover:bg-blue-900" aria-label="Notifications">
            <i className="ri-notification-3-line text-xl"></i>
          </button>
          <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
            <i className="ri-user-line text-gray-700"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
